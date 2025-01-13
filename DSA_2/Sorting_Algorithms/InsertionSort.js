//* ====== Insertion Sort ====== *//

const arr = [2, 7, 4, 6, 1, 5, 3];

function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let j = i
		while(j>0 && arr[j] < arr[j-1]) {
			let temp = arr[j]
			arr[j] = arr[j-1]
			arr[j-1] = temp
			j--
		}
	}
	 console.log(arr)
}
insertionSort(arr);
