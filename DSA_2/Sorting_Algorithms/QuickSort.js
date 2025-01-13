//* ====== Quick Sort ====== *//

const arr = [12, 3, 32, 54, 36, 7, 8, 13];

function QuickSort(arr) {
	if(arr.length< 2) return arr
	const pivot = arr[arr.length-1]
	const left = []
	const right = []
	for(let i = 0; i<arr.length-1; i++) {
		if(pivot < arr[i]) {
			right.push(arr[i])
		} else {
			left.push(arr[i])
		}
	}
	return [...QuickSort(left), pivot, ...QuickSort(right)]
}
console.log(QuickSort(arr));
