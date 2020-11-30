"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.saveSelectedPickupPoint=saveSelectedPickupPoint;function saveSelectedPickupPoint(a){var b=document.querySelector("[name=\"packeta-point-id\"]");// check the real name of input
b.value=a?"id: ".concat(a.id,", place: ").concat(a.place,", url: ").concat(a.url):"None"}
"use strict";var Packeta,_saveSelectedPickupPoint=require("./utils/saveSelectedPickupPoint");(function(){var a=document.currentScript.getAttribute("apiKey");window.onload=function(){var b=document.querySelector("[name*=\"Zasilkovna\"]");// check the real name of input
b.addEventListener("click",function(){return Packeta.Widget.pick(a,_saveSelectedPickupPoint.saveSelectedPickupPoint)},!1)}})();
