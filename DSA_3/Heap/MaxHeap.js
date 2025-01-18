class MaxHeap {
	constructor() {
		this.heap = [];
	}
	parent(i) {
		return Math.floor((i - 1) / 2);
	}
	leftChild(i) {
		return 2 * i + 1;
	}
	rightChild(i) {
		return 2 * i + 2;
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	heapifyUp(i) {
		let parent = this.parent(i);
		while (i > 0 && this.heap[i] > this.heap[parent]) {
			this.swap(i, parent);
			i = parent;
			parent = this.parent(i);
		}
	}
	heapifyDown(i) {
		const left = this.leftChild(i);
		const right = this.rightChild(i);
		let largest = i;
		while (
			left < this.heap.length &&
			this.heap[left] > this.heap[largest]
		) {
			largest = left;
		}
		while (
			right < this.heap.length &&
			this.heap[right] > this.heap[largest]
		) {
			largest = right;
		}
		if (largest !== i) {
			this.swap(i, largest);
			this.heapifyDown(largest);
		}
	}
	insert(val) {
		this.heap.push(val);
		this.heapifyUp(this.heap.length - 1);
	}
	remove() {
		if (this.heap.length === 0) return null;
		if (this.heap.length === 1) return this.heap.pop();
		const root = this.heap[0]
		this.heap[0] = this.heap.pop();
		this.heapifyDown(0);
      return root
	}
	heapSort(arr) {
		const maxHeap = new MaxHeap();
		const sorted = [];
		for (const val of arr) {
			maxHeap.insert(val);
		}
		while (maxHeap.heap.length > 0) {
         sorted.push(maxHeap.remove())
      }
      return sorted
	}
	printHeap() {
		console.log("HEAP", this.heap);
	}
}

const max = new MaxHeap();

max.insert(1);
max.insert(2);
max.insert(3);
max.insert(4);
max.insert(5);
max.remove();
max.printHeap();
const arr = [6,5,34,12,7,3,98]
console.log("Heap Sort", max.heapSort(max.heap))
