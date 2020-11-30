(function () {
    const apiKey = document.currentScript.getAttribute('apiKey');
  window.onload = () => {
    const zasilkovnaButton = document.querySelector('[name*="Zasilkovna"]'); // check the real name of input
    const zasilkovnaOutput = document.querySelector(
      '[name="packeta-point-id"]'
    ); // check the real name of input

    function showSelectedPickupPoint(point) {
      if (point) {
        zasilkovnaOutput.value = `id: ${point.id}, place: ${point.place}, url: ${point.url}`;
      } else {
        zasilkovnaOutput.value = "None";
      }
    }

    zasilkovnaButton.addEventListener(
      "click",
      () => Packeta.Widget.pick(apiKey, showSelectedPickupPoint),
      false
    );
  };
})();
