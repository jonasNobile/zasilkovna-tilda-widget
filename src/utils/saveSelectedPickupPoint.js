export function saveSelectedPickupPoint(
  point,
  zasilkovnaButton,
  zasilkovnaOutput
) {
  const element = document.createElement("span");
  if (point && zasilkovnaButton && zasilkovnaOutput) {
    zasilkovnaOutput.value = "id: "
      .concat(point.id, ", place: ")
      .concat(point.place, ", url: ")
      .concat(point.url);
    element.innerText = `(${point.place}, ${point.city})`;
  } else {
    element.innerText = "Something went wrong. Please try it again.";
    zasilkovnaOutput.value = "None";
  }

  zasilkovnaButton.parentNode.appendChild(element);
}
