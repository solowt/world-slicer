// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/number"],function(f,d,e){Object.defineProperty(d,"__esModule",{value:!0});d.bindSliderAndTextBox=function(a,b){a.on("change",function(a){b.set("value",a,!1)});b.on("change",function(c){"string"===typeof c&&(c=e.parse(c));if(isNaN(c))this.set("value",a.get("value"),!1);else{var b=this.get("constraints"),d=b.min,b=b.max;c=c>b?b:c<d?d:c;this.set("value",c,!1);a.set("value",c,!1)}})};d.silentlyUpdateIntermediateChangingValueWidget=function(a,b){a.intermediateChanges=
!1;a.set("value",b,!1);a.intermediateChanges=!0};d.ensureEnabledChildSelection=function(a){if(a.selectedChildWidget.disabled)for(var b=a.getChildren(),c=0;c<b.length;c++)if(!b[c].disabled){a.selectChild(b[c],!1);break}};d.enable=function(a){a.set("disabled",!1)};d.disable=function(a){a.set("disabled",!0)};d.toggleControl=function(a,b){a&&a.declaredClass?a.set("disabled",b):a.disabled=b};d.updateSliderAndTextBoxConstraints=function(a){var b=a.minimum,c=a.maximum;a.textBox.set("constraints",{min:b,
max:c});a.slider.set({minimum:b,maximum:c,discreteValues:Math.round(c)-Math.round(b)+1})}});