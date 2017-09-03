// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../core/lang ../../core/Error ../Font ../SimpleLineSymbol ../SimpleMarkerSymbol ../PictureMarkerSymbol ../SimpleFillSymbol ../TextSymbol ../WebStyleSymbol ../Symbol3D ../LineSymbol3D ../PointSymbol3D ../PolygonSymbol3D ../LabelSymbol3D ../LineSymbol3DLayer ../IconSymbol3DLayer ../FillSymbol3DLayer ../TextSymbol3DLayer ../../Color".split(" "),function(H,g,l,t,u,v,w,f,m,x,y,z,n,A,p,B,C,D,E,F,G,q){function r(a){var f=a.color?a.color.clone():new q([255,255,255]),
c,b,d;a instanceof m?(a.color&&0===a.color.r&&0===a.color.g&&0===a.color.b&&(f=new q([255,255,255])),c={href:a.url},b=a.width<=a.height?a.height:a.width):(c=a.style,c in e?c=e[c]:(console.log(c+' cannot be mapped to Icon symbol. Fallback to "circle"'),c="circle"),c={primitive:c},b=a.size,a.outline&&a.outline.color&&0<a.outline.width&&(d={size:a.outline.width,color:a.outline.color.clone()}));return new p(new E({size:b,screenOffset:[a.xoffset,a.yoffset],resource:c,material:{color:f},outline:d}))}Object.defineProperty(g,
"__esModule",{value:!0});var e={};e[f.STYLE_CIRCLE]="circle";e[f.STYLE_CROSS]="cross";e[f.STYLE_DIAMOND]="kite";e[f.STYLE_SQUARE]="square";e[f.STYLE_X]="x";g.to3D=function(a,e,c,b){void 0===e&&(e=!1);void 0===c&&(c=!1);void 0===b&&(b=!0);if(!a)return{symbol:null};if(a instanceof n||a instanceof z)b=a.clone();else if(a instanceof w)b=new A(new D({size:a.width||1,material:{color:a.color?a.color.clone():[255,255,255]}}));else if(a instanceof f)b=r(a);else if(a instanceof m)b=r(a);else if(a instanceof
x)b=new F({material:{color:a.color?a.color.clone():[255,255,255]}}),a.outline&&a.outline.color&&(b.outline={size:a.outline.width||0,color:a.outline.color}),b=new B(b);else if(a instanceof y){var d;switch(a.verticalAlignment){case "top":d="top";break;case "middle":d="center";break;case "bottom":d="bottom";break;default:d="center"}switch(a.horizontalAlignment){case "left":d+="Left";break;case "center":d+="Center";break;case "right":d+="Right";break;default:d+="Center"}var h=l.clone(v.defaultProps);
a.font&&l.mixin(h,a.font);var k;k=a.haloColor;var g=a.haloSize;k=k&&0<g?{color:t.clone(k),size:g}:null;b=new (b?C:p)(new G({size:h.size,font:{family:h.family,weight:h.weight,style:h.style},halo:k,material:{color:a.color.clone()},placement:d,screenOffset:[a.xoffset,a.yoffset],text:a.text}))}else return{error:new u("symbol-conversion:unsupported-2d-symbol","Unsupported 2D symbol of tyoe '"+(a.type||a.declaredClass)+"'",{symbol:a})};e&&(b.id=a.id);if(c&&b.isInstanceOf(n))for(a=0;a<b.symbolLayers.length;++a)b.symbolLayers.getItemAt(a)._ignoreDrivers=
!0;return{symbol:b}}});