import { saveSelectedPickupPoint } from "./utils/saveSelectedPickupPoint";
(function () {
  const apiKey = document.currentScript.getAttribute("apiKey");
  window.onload = () => {
    const zasilkovnaButton = document.querySelector('[value*="Zásilkovna"]');
    const zasilkovnaOutput = document.querySelector('[name="packeta-point-id"]');

    if (zasilkovnaButton) {
      zasilkovnaButton.addEventListener(
        "change",
        () => {
          Packeta.Widget.pick(apiKey, (point) => {
            saveSelectedPickupPoint(point, zasilkovnaButton, zasilkovnaOutput);
          });
        },
        false
      );
    }
  };
})();
