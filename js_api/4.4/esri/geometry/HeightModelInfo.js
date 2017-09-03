// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ../core/accessorSupport/decorators ./support/scaleUtils".split(" "),function(f,k,g,d,b,a,c,h){f=a({gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"});a=a({meter:"meter",foot:"foot",foot_us:"foot-us",foot_clarke:"foot-clarke",yard_clarke:"yard-clarke",link_clarke:"link-clarke",yard_sears:"yard-sears",foot_sears:"foot-sears",chain_sears:"chain-sears",
chain_benoit_1895_b:"chain-benoit-1895-b",yard_indian:"yard-indian",yard_indian_1937:"yard-indian-1937",foot_gold_coast:"foot-gold-coast",chain_sears_1922_truncated:"chain-sears-1922-truncated","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});b=e=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.ellipsoid=null;return a}g(a,b);a.prototype.clone=function(){return new e({heightModel:this.heightModel,heightUnit:this.heightUnit,ellipsoid:this.ellipsoid})};a.deriveUnitFromSR=
function(a,b){a=a.clone();a.heightUnit=h.getVerticalUnitStringForSR(b);return a};a.fromJSON=function(a){if(!a)return null;var b=new e;b.read(a);return b};return a}(c.declared(b));d([c.property({json:{read:f.read,write:f.write}})],b.prototype,"heightModel",void 0);d([c.property({json:{read:a.read,write:a.write}})],b.prototype,"heightUnit",void 0);d([c.property({json:{write:!0}})],b.prototype,"ellipsoid",void 0);b=e=d([c.subclass("esri.HeightModelInfo")],b);var e;return b});