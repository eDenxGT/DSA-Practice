//* ====== Merge Sort ====== *//

const arr = [-3, 65, 7, 67, 32, 344, -2, 1, 12, 3, 32, 5, 6, 7, 8, 13];

function mergeSort(arr) {
	if (arr.length < 2) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
	const sortedArray = [];
	let i = 0,
		j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] > right[j]) {
			sortedArray.push(right[j]);
			j++;
		} else {
			sortedArray.push(left[i]);
			i++;
		}
	}
	while (i < left.length) {
		sortedArray.push(left[i]);
		i++;
	}
	while (j < right.length) {
		sortedArray.push(right[j]);
		j++;
	}
   return sortedArray
}

console.log(mergeSort(arr));
