// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,c){Object.defineProperty(c,"__esModule",{value:!0});c.startMeasurement=function(b){if(!b.extensions.disjointTimerQuery)return null;var a=new d;a.start(b);return a};var d=function(){function b(){}b.prototype.start=function(a){this._rctx=a;a=a.extensions.disjointTimerQuery;this._query=a.createQueryEXT();a.beginQueryEXT(a.TIME_ELAPSED_EXT,this._query)};b.prototype.stop=function(a,b){void 0===b&&(b=50);this._cb=a;this._checkInterval=b;a=this._rctx.extensions.disjointTimerQuery;
a.endQueryEXT(a.TIME_ELAPSED_EXT);this._checkQueryResult()};b.prototype._checkQueryResult=function(){var a=this._rctx.extensions.disjointTimerQuery,b=a.getQueryObjectEXT(this._query,a.QUERY_RESULT_AVAILABLE_EXT),c=this._rctx.gl.getParameter(a.GPU_DISJOINT_EXT);b&&!c?(a=a.getQueryObjectEXT(this._query,a.QUERY_RESULT_EXT),this._cb(a/1E6)):c?this._cb(null):setTimeout(this._checkQueryResult.bind(this),this._checkInterval)};return b}()});