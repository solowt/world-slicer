// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/typescript ./core/errorMessages ./core/ExtensionConfigurationBase".split(" "),function(b,l,g,e,f,h,k){b=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.config=null;return a}g(c,b);c.prototype._initializeResponseReceived=function(a){var d=this;return this.inherited(arguments).then(function(){d.config.dataSourceConfigs||(d.config.dataSourceConfigs=[])})};c.prototype._messageReceived=
function(a){switch(a.functionName.toLowerCase()){case "datasourceselected":return this._dataSourceSelectionChanged(a.args);case "mapWidgetSelected":return this._mapWidgetSelectionChanged(a.args.mapWidgetId)}};c.prototype.getDataSourceConfig=function(a){if(!this._isHostInitialized())throw Error(h.hostNotReady);var d=a;"object"===typeof a&&(d=a.id);for(a=0;a<this.config.dataSourceConfigs.length;a++)if(this.config.dataSourceConfigs[a].dataSourceId===d)return this.config.dataSourceConfigs[a];return null};
c.prototype._dataSourceSelectionChanged=function(a){var d=this;a=a.dataSourceId;for(var c=0;c<this.config.dataSourceConfigs.length;c++)if(this.config.dataSourceConfigs[c].dataSourceId!==a){this.config.dataSourceConfigs.splice(c,1);break}var b=this.getDataSourceConfig(a);b||(b={dataSourceId:a},this.config.dataSourceConfigs.push(b));this.getDataSourceProxy(a).then(function(a){d.dataSourceSelectionChanged(a,b);d.emit("data-source-selection-changed",{dataSourceProxy:a,dataSourceConfig:b})})};c.prototype.dataSourceSelectionChanged=
function(a,b){};c.prototype._mapWidgetSelectionChanged=function(a){var b=this;this.getMapWidgetProxy(a).then(function(a){b.mapWidgetSelectionChanged(a);b.emit("map-widget-selection-changed",{mapWidgetProxy:a})})};c.prototype.mapWidgetSelectionChanged=function(a){};return c}(k);e([f.shared("esri.opsdashboard.WidgetConfigurationProxy")],b.prototype,"declaredClass",void 0);return b=e([f.subclass()],b)});