class MinHeap {
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
	insert(val) {
		this.heap.push(val);
		this.heapifyUp(this.heap.length - 1);
	}
	heapifyUp(index) {
		let parentIndex = this.parent(index);
		while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
			this.swap(index, parentIndex);
			index = parentIndex;
			parentIndex = this.parent(index);
		}
	}
	heapifyDown(index) {
		const right = this.rightChild(index);
		const left = this.leftChild(index);
		let smallest = index;
		while (
			left < this.heap.length &&
			this.heap[left] < this.heap[smallest]
		) {
			smallest = left;
		}
		while (
			right < this.heap.length &&
			this.heap[right] < this.heap[smallest]
		) {
			smallest = right;
		}

		if (smallest !== index) {
			this.swap(index, smallest);
			this.heapifyDown(smallest);
		}
	}
	remove() {
		if (this.heap.length === 0) return null;
		if (this.heap.length === 1) return this.heap.pop();
		const root = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown(0);
      return root
	}
   heapSort(arr) {
      const minHeap = new MinHeap()
      const sorted = []
      for(const val of arr) {
         minHeap.insert(val)
      }
      while(minHeap.heap.length > 0) {
         sorted.push(minHeap.remove())
      }
      return sorted

   }
	printHeap() {
		console.log("HEAP", this.heap);
	}
}

const min = new MinHeap();
min.insert(6);
min.insert(1);
min.insert(2);
min.insert(3);
min.insert(4);
min.insert(5);
min.remove();
min.printHeap();
const arr = [6,5,34,12,7,3,98]
console.log("Heap Sort", min.heapSort(min.heap))
