const arr = [9, 5, 1, 3, 7];

function bubblesort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    const swapped = false;
    console.log(`Arr ${i}`, arr);
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        const swapped = true;
      }
    }
    // Nếu không có phần tử nào để hoán đổi
    // bên trong vòng lặp thì Break
    if (swapped == false) {
      break;
    }
  }
  // console.table(arr);
  return arr;
}
console.log(bubblesort(arr));
