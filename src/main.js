import { saveSelectedPickupPoint } from "./utils/saveSelectedPickupPoint";
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
