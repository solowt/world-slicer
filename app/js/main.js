require([
  "esri/core/watchUtils",
  "esri/views/MapView",
  "esri/geometry/Point",
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
  "esri/symbols/PointSymbol3D",
  "esri/symbols/IconSymbol3DLayer",
  "esri/symbols/LabelSymbol3D",
  "esri/symbols/TextSymbol3DLayer",
  "esri/symbols/callouts/LineCallout3D",
  "vue",
  "dojo/domReady!"
], function(
  watchUtils, MapView, Point,
  Extent, Map, Graphic, request,
  geoEngine, Polygon, SceneView,
  Polyline, SFS, GraphicsLayer,
  PointSymbol3D, IconSymbol3DLayer, LabelSymbol3D,
  TextSymbol3DLayer, LineCallout3D, Vue
  ) {
  Vue.component('resize-bar', {
    template:`<div v-on:mousedown.stop.prevent="onDown" :style="styles">
      <svg :style="svgStyles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" class="svg-icon">
        <path d="M19.634 28a3.634 3.634 0 1 1-7.268 0 3.634 3.634 0 0 1 7.268 0zm.001-24a3.635 3.635 0 1 1-7.27 0 3.635 3.635 0 0 1 7.27 0zm0 12a3.635 3.635 0 1 1-7.27 0 3.635 3.635 0 0 1 7.27 0z"/>
      </svg>
    </div>
    `,
    data: () => {
      return {
        styles: {
          padding: 0,
          margin: 0,
          marginTop: '10px',
          marginBottom: '10px',
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
          height: 'auto',
          background: 'rgba(0, 0, 0, .5)',
          cursor: 'ew-resize',
          flex: '0 0 15px',
          position: 'relative'
        },
        svgStyles: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        },
        el: document.getElementById('mapDiv'),
        dragging: false,
      };
    },
    methods: {
      onDown: function(e){
        this.dragging = true;
        window.addEventListener('mousemove', this.onMove);
        window.addEventListener('mouseup', this.onUp);
      },
      onUp: function(e){
        this.dragging = false;
        window.removeEventListener('mouseup', this.onUp);
        window.removeEventListener('mousemove', this.onMove);
      },
      onMove: function(e){
        this.el.style.flex = `0 0 ${e.clientX - 15}px`;
      }
    }
  })

  Vue.component('slice-tools', {
    template: `
      <div v-bind:style="styles">
        <div :style="buttonStyles" title="Remove slice" v-on:click="removeSlice">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" class="svg-icon">
            <path d="M18.404 16l9.9 9.9-2.404 2.404-9.9-9.9-9.9 9.9L3.696 25.9l9.9-9.9-9.9-9.898L6.1 3.698l9.9 9.899 9.9-9.9 2.404 2.406-9.9 9.898z"/>
          </svg>
        </div>
        <div :style="buttonStyles" title="Toggle View Sync" v-on:click="toggleLock">
          <svg v-if="locked" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="svg-icon">
            <path d="M26 14H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2zm0 16H6V16h20v14zM12 10c0-2.205 1.794-4 4-4s4 1.795 4 4v4h2v-4c0-3.309-2.691-6-6-6s-6 2.691-6 6v4h2v-4zm-4 0c0-4.4 3.6-8 8-8s8 3.6 8 8v4h2v-4c0-5.514-4.486-10-10-10S6 4.486 6 10v4h2v-4zm10 12v-2h-2v-2h-2v10h2v-2h2v-2h-2v-2z"/>
          </svg>
          <svg v-if="!locked" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="svg-icon">
            <path d="M22 14H2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2zm0 16H2V16h20v14zm2-30a8 8 0 0 0-7.999 8L16 14h2V8a6 6 0 0 1 11.999 0H30v2h-2V8a4 4 0 0 0-8 0v6h2V8a2 2 0 0 1 4.001 0v4H32V8a8 8 0 0 0-8-8zM14 22v-2h-2v-2h-2v10h2v-2h2v-2h-2v-2z"/>
          </svg>
        </div>

        <div :style="buttonStyles" title="Elevation Sampler" v-on:click="toggleSampler">
          <!--Made by "http://www.freepik.com" title="Freepik from https://www.flaticon.com/ -->
          <svg version="1.1" height="20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <path d="M437.65,357.018l-49.086,58.904l-117.53-204.323v-76.167h100.227V45.228H240.966v166.372L123.435,415.922L74.35,357.018
                L0,466.772h512L437.65,357.018z M207.16,330.672L256,245.767l48.84,84.906C272.609,337.367,239.392,337.368,207.16,330.672z"/>
            </g>
          </g>
          </svg>
        </div>
      </div>`,
    data: () => {
      return {
        locked: true,
        styles: {
          display: 'flex',
          background: 'rgb(160, 160, 160)',
          width: 'auto',
          height: '30px',
          position: 'absolute',
          top: '5px',
          left: '5px',
        },
        buttonStyles: {
          cursor: 'pointer',
          height: 'auto',
          width: 'auto',
          padding: '5px'
        }
      };
    },
    mounted: function(){
    },
    methods: {
      toggleSampler: function(){
        this.$parent.toggleSampler();
      },
      toggleLock: function(){
        if (this.locked){
          this.$parent.syncHandle.remove();
          this.locked = false;
        } else {
          this.$parent.syncHandle = synchronizeView(this.$parent.view, mv);
          this.locked = true;
        }
      },
      removeSlice: function(){
        sliceContainer.removeSlice(this.$parent.id);
      }
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
        samplerHandle: null,
        currElevGraphic: null,
        view: null,
        syncHandle: null,
        styles: {
          cursor: null,
          border: '1px solid black',
          height: '100%',
          width: '100%',
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
          extent: this.extent.clone().expand(2.0),
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
    beforeDestroy: function(){
      this.syncHandle.remove();
    },
    methods: {
      toggleSampler: function(){
        if (this.samplerHandle){
          this.samplerHandle.remove();
          this.samplerHandle = null;
          this.styles.cursor = null;
        } else {
          this.styles.cursor = 'pointer';
          this.view.then(sv => {
            this.samplerHandle = sv.on('pointer-move', e => {
              let p = sv.toMap(e);
              if (p){
                let elevation = p.z;
                let displayElevation = elevation.toFixed(3);
                if (this.currElevGraphic) {
                  sv.graphics.remove(this.currElevGraphic);
                  this.currElevGraphic = null;
                }
                this.currElevGraphic = getSampleGraphic(displayElevation, p, true);
                if (this.currElevGraphic){
                  let clientSample =  sampleTerrain(sv, p);
                  if (clientSample && p.z >= clientSample) sv.graphics.add(this.currElevGraphic);
                }
              }
            });
          });
        }
      },
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
          
          sv.goTo({ tilt: 70 }, { duration: 2000 }).always(e => this.syncHandle = synchronizeView(sv, mv));

          Promise.all(edges.map((edge, idx) => computeEdge(edge))).then(results => {
            let min = Infinity;
            let max = -Infinity;


            results.forEach(r => {
              let startingPoint =  new Point({
                x: r.geometry.paths[0][0][0],
                y: r.geometry.paths[0][0][1],
                spatialReference: { wkid: 3857 }
              });

              let cornerGraphic = getSampleGraphic(r.geometry.paths[0][0][2].toFixed(3), startingPoint, true);
              sv.graphics.add(cornerGraphic);
            });

            let averageSide = (distance(results[0].geometry.paths[0][0], results[1].geometry.paths[0][0]) + distance(results[1].geometry.paths[0][0], results[2].geometry.paths[0][0])) / 2;

            let allPaths = results[0].geometry.paths[0].concat(results[1].geometry.paths[0], results[2].geometry.paths[0], results[3].geometry.paths[0]);
            for (let i = 0; i < allPaths.length; i ++){
              let vertexHeight = allPaths[i][2];
              if (vertexHeight > max){
                max = vertexHeight;
              } else if (vertexHeight < min){
                min = vertexHeight;
              }
            }

            let depth = min - averageSide / 4;

            results.forEach((result, idx) => {
              processEdgeResults(result.geometry.paths[0], idx, depth, sv);
            });
          });
        });
      }
    }
  });

  const sliceContainer = new Vue({
    el: "#vm-container",
    data: {
      flexbox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        flex: '1 1 auto',
        minWidth: 0
      },
      sliceHolder:{
        flex: '1 1 0%',
        minWidth: 0,
        minHeight: 0,
        marginBottom: '12px',
        marginTop: '10px',
        marginRight: '10px'
      },
      noSlices: {
        textAlign: 'center',
        fontSize: '30pt',
        marginTop: '20%'
      },
      resize: {
        background: 'rgba(0, 0, 0, .5)',
        width: '100%',
        borderRight: '1px solid black',
        height: '20px',
        cursor: 'ns-resize'
      },
      svg: {
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block'
      },
      slices: [],
      nextId: -1,
      dragging: false,
      dragStart: null,
      dragIdx: null,
    },
    template: `
      <div id="vm-container">
        <resize-bar></resize-bar>
        <div :style="flexbox">
          <div :style="noSlices" v-if="slices.length === 0">
            Hold Control and Drag to Define a Slice.
          </div>
          <div :style="sliceHolder" v-for="(slice, idx) in slices" class="slice-holder" :key="slice.id">
            <view-slice :id="slice.id" :extent="slice.extent">
            </view-slice>
            <div :style="resize" v-if="idx !== slices.length - 1" v-on:mousedown.stop.prevent="(e)=>{ onDown(e, idx) }">
              <svg :style="svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="svg-icon">
                <path d="M31.635 16a3.635 3.635 0 1 1-7.27 0 3.635 3.635 0 0 1 7.27 0zM7.634 16a3.634 3.634 0 1 1-7.268 0 3.634 3.634 0 0 1 7.268 0zm12 0a3.634 3.634 0 1 1-7.268 0 3.634 3.634 0 0 1 7.268 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,
    methods: {
      addSlice: function(extent, graphic){
        this.nextId+=1;
        this.slices.push({
          graphic: graphic,
          id: this.nextId,
          extent: extent
        });

        let currSlices = this.$el.getElementsByClassName('slice-holder');
        for (let i = 0; i < currSlices.length; i++){
          currSlices[i].style.flex = '1 1 0%';
        }
      },
      removeSlice: function(id){
        const idx = this.slices.findIndex(slice => id === slice.id);
        if (idx >= 0){
          let graphic = this.slices[idx].graphic;
          mv.graphics.remove(graphic);
          this.slices.splice(idx, 1);
        }

        // if there is one left, set it back to flex
        if (this.slices.length === 1){
          setTimeout(()=>{
            let currSlice = this.$el.getElementsByClassName('slice-holder')[0];
            currSlice.style.flex = '1 1 0%';
          },0);
        }
      },
      onDown: function(e, idx){
        this.dragStart = e.y;
        this.dragging = true;
        this.dragIdx = idx;
        window.addEventListener('mousemove', this.onMove);
        window.addEventListener('mouseup', this.onUp);
      },
      onUp: function(e){
        this.dragging = false;
        this.dragStart = null;
        this.dragIdx = null;
        window.removeEventListener('mouseup', this.onUp);
        window.removeEventListener('mousemove', this.onMove);
      },
      onMove: function(e){
        let currSlices = this.$el.getElementsByClassName('slice-holder');
        let el,
            direction;

        if (this.dragIdx === 0){
          el = currSlices[0];
          direction = 'down';
        } else if (this.dragIdx === currSlices.length - 2){
          el = currSlices[currSlices.length - 1];
          direction = 'up';
        } else if (e.y > this.dragStart){
          el = currSlices[this.dragIdx]
          direction = 'down';
        } else if (e.y < this.dragStart){
          el = currSlices[this.dragIdx + 1];
          direction = 'up';
        } else {
          return
        }
        for (let i = 0; i < currSlices.length; i++){
          if (currSlices[i] !== el){
            // currSlices[i].style.height = '';
            currSlices[i].style.flex = '1 1 0%';
          }
        }

        const box = el.getBoundingClientRect();
        let newHeight;
        if (direction === 'down'){
          let currHeight = box.height + box.top;
          let diff = e.y - currHeight;
          newHeight = box.height + diff;
        } else if (direction === 'up'){
          let currTop = box.top;
          let diff = currTop - e.y;
          newHeight = box.height + diff;
        }

        el.style.flex = '';
        el.style.height  = `${newHeight}px`
      }
    }
  });


  const map = new Map({
    basemap: "satellite",
    ground: "world-elevation",
  });
  
  const mv = new MapView({
    container: 'mapDiv',
    map: map,
    constraints: {
      snapToZoom: false
    },
    zoom: 2
  });
  
  let lastGraphic = null;

  mv.on('drag', e => {
    if (e.native.ctrlKey === true){
      e.stopPropagation();
      const extent = getExtent(e, e.origin, mv);
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
      } 
    }
    if (e.action === 'end' && (lastGraphic || e.native.ctrlKey === true)){
      const extent = getExtent(e, e.origin, mv)
      let g = new Graphic({
        symbol: fillSym,
        geometry: extent
      });
      if (lastGraphic){
        mv.graphics.remove(lastGraphic);
      }
      lastGraphic = null;
      mv.graphics.add(g)
      sliceContainer.addSlice(extent, g);
    }
  });
    
  function drawSlice(extent){
    sliceContainer.drawSlice(extent);
  }
  
  const fillSym = new SFS({
    color: [245,245,220, .5],
    outline: {
       color: [0, 0, 0],
       width: 2
    }
  });

  function getExtent(curr, origin, view){
    curr = view.toMap(curr);
    origin = view.toMap(origin);
    return new Extent({
      xmin: Math.min(origin.x, curr.x),
      xmax: Math.max(origin.x, curr.x),
      ymin: Math.min(origin.y, curr.y),
      ymax: Math.max(origin.y, curr.y),
      spatialReference: { wkid: 3857 }
    });
  }

  function computeEdge(edge, idx){
    const dist = Math.sqrt(Math.pow(edge.paths[0][1][0]-edge.paths[0][0][0], 2)+Math.pow(edge.paths[0][1][1]-edge.paths[0][0][1], 2));
    
    let res = Math.round(dist/1000);
    return getSamples(map.ground.layers.getItemAt(0), edge, res);
  }

  function processEdgeResults(topRing, idx, depth, view){
    const increment = idx === 1 || idx === 2 ? .0001 : -.0001;

    let bottomRing = [
      [topRing[0][0] + increment, topRing[0][1] + increment, depth],
      [topRing[topRing.length - 1][0] + increment, topRing[topRing.length - 1][1] + increment, depth],
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

    view.graphics.add(g);
  }
  
  
  function getSamples(elevationLayer, line, resolution){
    let densifiedLine = geoEngine.densify(line, resolution, 'meters');
    return elevationLayer.queryElevation(densifiedLine);
  }

  function distance(p1, p2){
    return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
  }

  // from https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=views-synchronize
  function synchronizeView(view, others) {
    others = Array.isArray(others) ? others : [others];

    let viewpointWatchHandle,
        viewStationaryHandle,
        otherInteractHandlers,
        scheduleId;

    let clear = function() {
      if (otherInteractHandlers) {
        otherInteractHandlers.forEach(handle => {
          handle.remove();
        });
      }
      viewpointWatchHandle && viewpointWatchHandle.remove();
      viewStationaryHandle && viewStationaryHandle.remove();
      scheduleId && clearTimeout(scheduleId);
      otherInteractHandlers = viewpointWatchHandle =
        viewStationaryHandle = scheduleId = null;
    };

    let interactWatcher = view.watch('interacting, animation',
      newValue => {
        if (!newValue) {
          return;
        }
        if (viewpointWatchHandle || scheduleId) {
          return;
        }

        // start updating the other views at the next frame
        scheduleId = setTimeout(() => {
          scheduleId = null;
          viewpointWatchHandle = view.watch('viewpoint',
            newValue => {
              others.forEach(otherView => otherView.viewpoint = newValue);
            });
        }, 0);

        // stop as soon as another view starts interacting, like if the user starts panning
        otherInteractHandlers = others.map(otherView => {
          return watchUtils.watch(otherView,
            'interacting,animation',
            value => {
              if (value) {
                clear();
              }
            });
        });

        // or stop when the view is stationary again
        viewStationaryHandle = watchUtils.whenTrue(view,
          'stationary', clear);
      });

    return {
      remove: function() {
        this.remove = function() {};
        clear();
        interactWatcher.remove();
      }
    }
  }

  function sampleTerrain(view, point){
    if (view && view.basemapTerrain){
      return view.basemapTerrain.getElevation(point);
    }
    return null;
  }

  function getSampleGraphic(elevation, point, showCallout){
    return new Graphic({
      geometry: point,
      symbol: new PointSymbol3D({
        symbolLayers: [new TextSymbol3DLayer({
          material: { color: 'orange' },
          size: 10,
          halo: {
            color: 'black',
            size: 2
          },
          text: `${elevation}m`
        })],
        verticalOffset: showCallout ? {
          screenLength: '20px',
          minWorldLength: 100
        } : null,
        callout: showCallout ? new LineCallout3D({
          size: 1.5,
          color: "white",
          border: {
            color: "black"
          }
        }) : null
      })
    });
  }
});