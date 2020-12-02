export function saveSelectedPickupPoint(point) {
  const zasilkovnaOutput = document.querySelector('[name="packeta-point-id"]');
  const zasilkovnaButton = document.querySelector(
    '[name="Delivery"][value*="Zásilkovna"]'
  );

  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

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
