import { saveSelectedPickupPoint } from "./utils/saveSelectedPickupPoint";

let Packeta;

(function () {
  const apiKey = document.currentScript.getAttribute("apiKey");
  window.onload = () => {
    const zasilkovnaButton = document.querySelector('[name*="Zasilkovna"]'); // check the real name of input

    if (zasilkovnaButton) {
      zasilkovnaButton.addEventListener(
        "click",
        () => Packeta.Widget.pick(apiKey, saveSelectedPickupPoint),
        false
      );
    }
  };
})();
