(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function saveSelectedPickupPoint(point) {
    const zasilkovnaOutput = document.querySelector('[name="packeta-point-id"]');
    const zasilkovnaButton = document.querySelector(
      '[name="Delivery"][value*="Zásilkovna"]'
    );

    if (point) {
      zasilkovnaOutput.value = "id: "
        .concat(point.id, ", place: ")
        .concat(point.place, ", url: ")
        .concat(point.url);

      const element = document.createElement("span");
      element.innerText = `(${point.place}, ${point.city})`;
      zasilkovnaButton.parentNode.appendChild(element);
    } else {
      zasilkovnaOutput.value = "None";
    }
  }

  (function () {
    const apiKey = document.currentScript.getAttribute("apiKey");
    window.onload = () => {
      const zasilkovnaButton = document.querySelector('[name="Delivery"][value*="Zásilkovna"]');

      if (zasilkovnaButton) {
        zasilkovnaButton.addEventListener(
          "click",
          () => Packeta.Widget.pick(apiKey, saveSelectedPickupPoint),
          false
        );
      }
    };
  })();

})));
