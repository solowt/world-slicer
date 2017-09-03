// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Error ../../../../core/numberUtils ../../../../Color ../../statistics/support/utils ../../../../symbols/SimpleMarkerSymbol ../../../../symbols/SimpleLineSymbol ../../../../symbols/SimpleFillSymbol ../../../../symbols/PointSymbol3D ../../../../symbols/IconSymbol3DLayer ../../../../symbols/ObjectSymbol3DLayer ../../support/utils ../../../../symbols/MeshSymbol3D ../../../../symbols/FillSymbol3DLayer".split(" "),function(A,f,m,k,n,p,q,r,t,l,u,v,w,x,y){function h(a,
c){return new m(a,c)}function z(a){var c=a.layer;return a.fields.filter(function(a){a=c.getFieldUsageInfo(a);return!a||!a.supportsRenderer})}Object.defineProperty(f,"__esModule",{value:!0});f.createError=h;f.getDefaultDataRange=function(a,c,d){var b,e;c=p.getSuggestedDataRange({statistics:a,isDate:c});c.defaultValuesUsed?(b=c.min,e=c.max):!d||null!=a.avg&&a.stddev||(b=a.min,e=a.max);return null!=b?[b,e]:null};f.createColors=function(a,c){for(var d=[],b=a.length,e=0;e<c;e++)d.push(new n(a[e%b]));return d};
f.createStopValues=function(a,c){var d=a.avg,b=d-a.stddev,e=d+a.stddev;b<a.min&&(b=a.min);e>a.max&&(e=a.max);c&&(d=b+(e-b)/2);a=k.round([b,e],{strictBounds:!0});b=a[0];e=a[1];a=[b,b+(d-b)/2,d,d+(e-d)/2,e];return k.round(a,{strictBounds:!0})};f.createSymbol=function(a,c,d,b,e,f){var g;switch(d){case "point":case "multipoint":d=null!=f?f:a.size;"2d"===b?g=new q({color:c,size:d,outline:{color:a.outline.color,width:a.outline.width}}):"3d-flat"===b?g=new l({symbolLayers:[new u({size:d,resource:{primitive:"circle"},
material:{color:c},outline:{color:a.outline.color,size:a.outline.width}})]}):-1<b.indexOf("3d-volumetric")&&(g=new l({symbolLayers:[new v({height:d,resource:{primitive:"3d-volumetric-uniform"===b?"sphere":"cylinder"},material:{color:c}})]}));break;case "polyline":a=null!=f?f:a.width;"2d"===b&&(g=new r({color:c,width:a}));break;case "polygon":"2d"===b&&(g=new t({color:c,outline:{color:a.outline.color,width:a.outline.width}}));break;case "mesh":g=new x({symbolLayers:[new y({material:{color:c,colorMixMode:e}})]})}return g};
f.verifyBasicFieldValidity=function(a,c,d){var b=w.getUnknownFields({layer:a,fields:c});if(b.length)return h(d,"Unknown fields: "+b.join(", ")+". You can only use fields defined in the layer schema");a=z({layer:a,fields:c});if(a.length)return h(d,"Unsupported fields: "+a.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true")}});