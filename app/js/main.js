require([
  "esri/core/watchUtils",
  "esri/views/MapView",
  "esri/geometry/Extent",
  "esri/Map",
  "esri/Graphic",
  "esri/request",
  "esri/geometry/geometryEngine",
  "esri/geometry/Polygon",
  "esri/views/SceneView",
  "esri/geometry/Polyline",
  "esri/symbols/SimpleFillSymbol",
  "esri/layers/GraphicsLayer",
  "vue",
  "dojo/domReady!"
], function(watchUtils, MapView, Extent, Map, Graphic, request, geoEngine, Polygon, SceneView, Polyline, SFS, GraphicsLayer, Vue) {

  Vue.component('slice-tools', {
    template: `
      <div v-bind:style="styles">
      </div>`,
    data: () => {
      return {
        styles: {
          background: 'rgba(255,255,255,.7)',
          width: '90%',
          height: '30px',
          position: 'absolute',
          top: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '4px'
        }
      };
    },
    mounted: function(){
    }
  });

  
  Vue.component('view-slice', {
    template: `
      <div v-bind:style="styles">
        <slice-tools></slice-tools>
      </div>`,
    props: [
      'id',
      'extent'
    ],
    data: () => {
      return {
        view: null,
        styles: {
          width: 'auto',
          height: 'auto',
          flex: 1,
          marginBottom: '10px',
          marginTop: '10px',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid black',
          position: 'relative'
        }
      };
    },
    mounted: function(){
      if (!this.view){
        this.view = new SceneView({
          ui: {
            components: []
          },
          container: this.$el,
          map: map,
          extent: this.extent,
          viewingMode: 'local',
          clippingArea: this.extent,
          environment: {
            starsEnabled: false,
            atmosphere: null
          }
        });
        this.setUp(this.extent);
      }
    },
    methods: {
      setUp: function(extent){
        const edges = [
          new Polyline({
            paths: [
              [extent.xmin, extent.ymin],
              [extent.xmin, extent.ymax]
            ],
            spatialReference: { wkid: 3857 }
          }),
          new Polyline({
            paths: [
              [extent.xmin, extent.ymax],
              [extent.xmax, extent.ymax]
            ],
            spatialReference: { wkid: 3857 }
          }),
          new Polyline({
            paths: [
              [extent.xmax, extent.ymax],
              [extent.xmax, extent.ymin]
            ],
            spatialReference: { wkid: 3857 }
          }),
          new Polyline({
            paths: [
              [extent.xmax, extent.ymin],
              [extent.xmin, extent.ymin]
            ],
            spatialReference: { wkid: 3857 }
          })
        ];
        
        this.view.then(sv => {
          sv.goTo({ tilt: 70, heading: 45 }, { duration: 2000 });
          edges.forEach((edge, idx) => {
            const dist = Math.sqrt(Math.pow(edge.paths[0][1][0]-edge.paths[0][0][0], 2)+Math.pow(edge.paths[0][1][1]-edge.paths[0][0][1], 2));
            
            let res = Math.round(dist/1000);
            getSamples(map.ground.layers.getItemAt(0), edge, res).then(results => {
              const increment = idx === 1 || idx === 2 ? .0001 : -.0001;
              let topRing = results.geometry.paths[0];
              
              //let height = 

              let bottomRing = [
                [topRing[0][0] + increment, topRing[0][1] + increment, -10000],
                [topRing[topRing.length - 1][0] + increment, topRing[topRing.length - 1][1] + increment, -10000],
              ]

              topRing.reverse();
              let rings = [bottomRing[1]].concat(topRing).concat(bottomRing)

              let g = new Graphic({
                geometry: new Polygon({
                  rings: rings,
                  spatialReference: { wkid: 3857 }
                }),
                symbol: fillSym
              });

              sv.graphics.add(g);
            });
          });
        });
      }
    }
  });

  const sliceContainer = new Vue({
    el: "#vm-container",
    data: {
      slices: []
    },
    methods: {
      addSlice: function(extent){
        this.slices.push({
          id: this.slices.length,
          extent: extent
        });
        return this.slices.length - 1;
      },
      removeSlice: function(id){
        const idx = this.slices.findIndex(slice => slice.id === id);
        if (idx >=0){
          this.slices.splice(idx, 1);
        }
      }
    }
  });


  const map = new Map({
    basemap: "satellite",
    ground: "world-elevation",
  });
  
  const mv = new MapView({
    container: 'mapDiv',
    map: map
  });
  
  let lastGraphic = null;

  mv.on('drag', ["Control"], e => {
    e.stopPropagation();
    let origin = mv.toMap(e.origin);
    let curr = mv.toMap(e);
    const extent = new Extent({
      xmin: Math.min(origin.x, curr.x),
      xmax: Math.max(origin.x, curr.x),
      ymin: Math.min(origin.y, curr.y),
      ymax: Math.max(origin.y, curr.y),
      spatialReference: { wkid: 3857 }
    });
    let g = new Graphic({
      symbol: fillSym,
      geometry: extent
    });
    if (e.action === 'update'){
      if (lastGraphic){
        mv.graphics.remove(lastGraphic);
      }
      lastGraphic = g;
      mv.graphics.add(g)
    } else if (e.action === 'end'){
      if (lastGraphic){
        mv.graphics.remove(lastGraphic);
      }
      lastGraphic = null;
      mv.graphics.add(g)
      sliceContainer.addSlice(extent);
    }
  });
  
  let sv;
  
  function drawSlice(extent){
    sliceContainer.drawSlice(extent);
  
    
  }
  
  const fillSym = new SFS({
    color: [245,245,220, .75],
    outline: {
       color: [0, 0, 0],
       width: 2
    }
  });     
  
  
  function getSamples(elevationLayer, line, resolution){
    let densifiedLine = geoEngine.densify(line, resolution, 'meters');
    return elevationLayer.queryElevation(densifiedLine);
  }

});