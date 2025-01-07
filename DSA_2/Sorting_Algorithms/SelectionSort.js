//* ====== Selection Sort ====== *//

const arr = [2, 7, 4, 1, 5, 3];

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j <= arr.length - 1; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
   return arr
}

console.log(selectionSort(arr))
