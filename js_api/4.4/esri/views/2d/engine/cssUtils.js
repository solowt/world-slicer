// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/has"],function(e,b,d){function f(a){return"matrix3d(\n                    "+a[0].toFixed(10)+", "+a[1].toFixed(10)+", 0, 0,\n                    "+a[2].toFixed(10)+", "+a[3].toFixed(10)+", 0, 0,\n                    0, 0, 1, 0,\n                    "+Math.round(a[4]).toFixed(10)+", "+Math.round(a[5]).toFixed(10)+", 0, 1\n                  )"}function g(a){return"translate("+Math.round(a[0])+"px, "+Math.round(a[1])+"px)"}function h(a){return"rotateZ( "+a+" deg)"}Object.defineProperty(b,
"__esModule",{value:!0});e=d("ff");var k=d("ie"),l=d("webkit");d=d("opera");var m=l&&"-webkit-transform"||e&&"-moz-transform"||d&&"-o-transform"||k&&"-ms-transform"||"transform";b.clip=function(a,c){a.clip=c?"rect( "+c.top+"px, "+c.right+"px, "+c.bottom+"px, "+c.left+"px)":""};b.setTransform=function(a,c){var b=null;2===c.length&&(b=g(c));6===c.length&&(b=f(c));a.transform=a[m]=b};b.setOrigin=function(a,b){a.transformOrigin=b[0]+"px "+b[1]+"px 0"};b.cssMatrix=function(a){return"matrix(\n                  "+
a[0].toFixed(10)+", "+a[1].toFixed(10)+",\n                  "+a[2].toFixed(10)+", "+a[3].toFixed(10)+",\n                  "+a[4]+", "+a[5]+"\n                )"};b.cssMatrix3d=f;b.translate=g;b.rotate=function(a){return h(a.toFixed(3))};b.rotateZ=h});