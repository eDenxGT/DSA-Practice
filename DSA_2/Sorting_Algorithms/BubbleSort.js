//* ====== Bubble Sort ====== *//

const arr = [2, 7, 4, 1, 5, 3];

function bubbleSort(arr) {
	let swapped = false;
	do {
		swapped = false
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}

console.log(bubbleSort(arr));
