function saveSelectedPickupPoint(point) {
    var zasilkovnaOutput = document.querySelector('[name="packeta-point-id"]'); // check the real name of input
  
    if (point) {
      zasilkovnaOutput.value = "id: ".concat(point.id, ", place: ").concat(point.place, ", url: ").concat(point.url);
    } else {
      zasilkovnaOutput.value = "None";
    }
  }

let Packeta;

(function () {
  const apiKey = document.currentScript.getAttribute("apiKey");
  window.onload = () => {
    const zasilkovnaButton = document.querySelector('[name*="Zasilkovna"]'); // check the real name of input
    
    zasilkovnaButton.addEventListener(
      "click",
      () => Packeta.Widget.pick(apiKey, saveSelectedPickupPoint),
      false
    );
  };
})();
