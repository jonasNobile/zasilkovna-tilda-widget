export function saveSelectedPickupPoint(point) {
    var zasilkovnaOutput = document.querySelector('[name="packeta-point-id"]'); // check the real name of input
  
    if (point) {
      zasilkovnaOutput.value = "id: ".concat(point.id, ", place: ").concat(point.place, ", url: ").concat(point.url);
    } else {
      zasilkovnaOutput.value = "None";
    }
  }
