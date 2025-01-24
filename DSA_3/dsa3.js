//* ================================================= *//
//! ================== Binary Tree ================== !//
//* ================================================= *//

// class Node {
//    constructor(value) {
//        this.value = value;
//        this.left = null;
//        this.right = null;
//    }
// }

// class BinaryTree {
//    constructor() {
//        this.root = null;
//    }

//    insert(value) {
//        const newNode = new Node(value);
//        if (!this.root) {
//            this.root = newNode;
//            return this;
//        }

//        let current = this.root;
//        while (true) {
//            if (value === current.value) return undefined;
//            if (value < current.value) {
//                if (!current.left) {
//                    current.left = newNode;
//                    return this;
//                }
//                current = current.left;
//            } else {
//                if (!current.right) {
//                    current.right = newNode;
//                    return this;
//                }
//                current = current.right;
//            }
//        }
//    }

//    find(value) {
//        if (!this.root) return false;

//        let current = this.root;
//        while (current) {
//            if (value === current.value) return current;
//            if (value < current.value) {
//                current = current.left;
//            } else {
//                current = current.right;
//            }
//        }
//        return false;
//    }
// }

// const bt = new BinaryTree()

// bt.insert(3)
// bt.insert(5)
// bt.insert(6)
// bt.insert(7)
// console.log(bt.find(6))

//* ======================================================== *//
//! ================== Binary Search Tree ================== !//
//* ======================================================== *//

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.right = null;
// 		this.left = null;
// 	}
// }

// class BST {
// 	constructor() {
// 		this.root = null;
// 	}
// 	isEmpty() {
// 		return this.root === null;
// 	}
// 	insert(val) {
// 		const node = new Node(val);
// 		if (this.root === null) {
// 			this.root = node;
// 		} else {
// 			this.insertNode(this.root, node);
// 		}
// 	}
// 	insertNode(root, node) {
// 		if (root.val > node.val) {
// 			if (root.left === null) {
// 				root.left = node;
// 			} else {
// 				this.insertNode(root.left, node);
// 			}
// 		} else {
// 			if (root.right === null) {
// 				root.right = node;
// 			} else {
// 				this.insertNode(root.right, node);
// 			}
// 		}
// 	}
// 	preOrder(root = this.root) {
// 		if (root) {
// 			console.log(root.val);
// 			this.preOrder(root.left);
// 			this.preOrder(root.right);
// 		}
// 	}
// 	inOrder(root = this.root) {
// 		if (root) {
// 			this.inOrder(root.left);
// 			console.log(root.val);
// 			this.inOrder(root.right);
// 		}
// 	}
// 	postOrder(root = this.root) {
// 		if (root) {
// 			this.postOrder(root.left);
// 			this.postOrder(root.right);
// 			console.log(root.val);
// 		}
// 	}
//    levelOrder(root = this.root) {
//       const queue = []
//       queue.push(root)
//       while(queue.length > 0) {
//          const curr = queue.shift()
//          console.log(curr.val)
//          if(curr.left) this.levelOrder(curr.left)
//          if(curr.right) this.levelOrder(curr.right)
//       }
//    }
// 	min(root = this.root) {
// 		if (root.left === null) {
// 			// console.log(root.val);
// 			return root.val;
// 		} else {
// 			this.min(root.left);
// 		}
// 	}
// 	max(root = this.root) {
// 		if (root.right === null) {
// 			// console.log(root.val);
// 			return root.val;
// 		} else {
// 			this.max(root.right);
// 		}
// 	}
// 	isBST() {
// 		console.log(this.validateBST(this.root, -Infinity, Infinity));
// 	}
// 	validateBST(root, minVal, maxVal) {
//       if(root === null) return true
//       if(root.val >= maxVal || root.val <= minVal) return false
//       return (
//          this.validateBST(root.left, minVal, root.val) &&
//          this.validateBST(root.right, root.val, maxVal)
//       )
//    }
// 	maxDepth(root = this.root) {
// 		if (root === null) return 0;
// 		const leftHeight = this.maxDepth(root.left);
// 		const rightHeight = this.maxDepth(root.right);
// 		return Math.max(leftHeight, rightHeight) + 1;
// 	}
// 	secondLargest(root = this.root) {
// 		let parent = null;
// 		let curr = root;
// 		while (curr.right) {
// 			parent = curr;
// 			curr = curr.right;
// 		}
// 		if (curr.left !== null) {
// 			return this.max(curr.left);
// 		}
// 		return parent.val;
// 	}
// 	findClosest(target) {
// 		let closest = Infinity;
// 		let curr = this.root;
// 		while (curr !== null) {
// 			if (Math.abs(curr.val - target) < Math.abs(closest - target)) {
// 				closest = curr.val;
// 			}
// 			if (curr.val > target) {
// 				curr = curr.left;
// 			} else if (curr.val < target) {
// 				curr = curr.right;
// 			} else {
// 				return curr.val;
// 			}
// 		}
// 		return closest;
// 	}
// 	delete(val) {
// 		if (!val) return console.error("Invalid Value!, Deletion failed");
// 		this.root = this.deleteNode(this.root, val);
// 	}
// 	deleteNode(root, val) {
// 		if (root === null) return null;
// 		if (root.val > val) {
// 			root.left = this.deleteNode(root.left, val);
// 		} else if (root.val < val) {
// 			root.right = this.deleteNode(root.right, val);
// 		} else {
// 			if (!root.right && !root.left) return null;
// 			if (!root.right) return root.left;
// 			if (!root.left) return root.right;

// 			root.val = this.min(root.right);
// 			root.right = this.deleteNode(root.right, root.val);
// 		}
// 		return root;
// 	}
// 	isBalanced() {
// 		return this.balanceCheck(this.root) !== -1;
// 	}
// 	balanceCheck(root) {
// 		if (root === null) return 0;
// 		const left = this.balanceCheck(root.left);
// 		const right = this.balanceCheck(root.right);
// 		if (Math.abs(left - right) > 1) return -1;
// 		return Math.max(left, right) + 1;
// 	}
// }

// const b = new BST();
// b.insert(10);
// b.insert(4);
// b.insert(2);
// b.insert(14);
// b.insert(5);
// b.insert(18);
// // b.preOrder()
// // b.postOrder()
// // b.inOrder()
// // b.min();
// // b.max();
// // b.isBST();
// // console.log(b.maxDepth());
// // console.log(b.secondLargest());
// // console.log(b.findClosest(3));
// // b.delete(4);
// console.log("\n");
// b.levelOrder();
// // b.inOrder();
// console.log(b.isBalanced());

//*============================================== *//
//! ================== MinHeap ================== !//
//* ============================================= *//

// class MinHeap {
// 	constructor() {
// 		this.heap = [];
// 	}
// 	parent(index) {
// 		return Math.floor((index - 1) / 2);
// 	}
// 	leftChild(index) {
// 		return 2 * index + 1;
// 	}
// 	rightChild(index) {
// 		return 2 * index + 2;
// 	}
// 	swap(i, j) {
// 		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
// 	}
// 	heapifyUp(i) {
// 		let parent = this.parent(i);
// 		while (i > 0 && this.heap[parent] > this.heap[i]) {
// 			this.swap(i, parent);
// 			i = parent;
// 			parent = this.parent(i);
// 		}
// 	}
// 	heapifyDown(i) {
// 		let left = this.leftChild(i);
// 		let right = this.rightChild(i);
// 		let smallest = i;
// 		if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
// 			smallest = left;
// 		}
// 		if (
// 			right < this.heap.length &&
// 			this.heap[right] < this.heap[smallest]
// 		) {
// 			smallest = right;
// 		}
// 		if (smallest !== i) {
// 			this.swap(i, smallest);
// 			this.heapifyDown(smallest);
// 		}
// 	}
// 	insert(i) {
// 		this.heap.push(i);
// 		this.heapifyUp(this.heap.length - 1);
// 	}
// 	remove() {
// 		if(this.heap.length === 0) return null
// 		if(this.heap.length === 1) return this.heap.pop()

// 		const root = this.heap[0]
// 		this.heap[0] = this.heap.pop()
// 		this.heapifyDown(0)
// 		return root
// 	}
// 	printHeap() {
// 		console.log("Heap:", this.heap)
// 	}
// }
// function heapSort(arr) {
// 	const minHeap = new MinHeap()
// 	const sorted= []
// 	for(const val of arr) {
// 		minHeap.insert(val)
// 	}
// 	while(minHeap.heap.length > 0) {
// 		sorted.push(minHeap.remove())
// 	}
// 	return sorted
// }
// const minheap = new MinHeap()

// minheap.insert(8)
// minheap.insert(6)
// minheap.insert(5)
// minheap.insert(4)
// minheap.printHeap()
// minheap.remove()
// minheap.printHeap()
// console.log(heapSort([4,3,2,34,6,6,7,88,65,4,3,5,67,5]))

//*============================================== *//
//! ================== MaxHeap ================== !//
//* ============================================= *//

// class MaxHeap {
// 	constructor() {
// 		this.heap = [];
// 	}
// 	parent(i) {
// 		return Math.floor((i - 1) / 2);
// 	}
// 	leftChild(i) {
// 		return 2 * i + 1;
// 	}
// 	rightChild(i) {
// 		return 2 * i + 1;
// 	}
// 	swap(i, j) {
// 		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
// 	}
// 	heapifyUp(i) {
// 		let parentIndex = this.parent(i);
// 		while (i > 0 && this.heap[parentIndex] < this.heap[i]) {
// 			this.swap(i, parentIndex);
// 			i = parentIndex;
// 			parentIndex = this.parent(i);
// 		}
// 	}
// 	heapifyDown(i) {
// 		const left = this.leftChild(i);
// 		const right = this.rightChild(i);
// 		let largest = i;
// 		if (left > 0 && this.heap[left] > this.heap[largest]) {
// 			largest = left;
// 		}
// 		if (right > 0 && this.heap[right] > this.heap[largest]) {
// 			largest = right;
// 		}
// 		if (largest !== i) {
// 			this.swap(largest, i);
// 			this.heapifyDown(largest);
// 		}
// 	}
// 	insert(val) {
// 		this.heap.push(val);
// 		this.heapifyUp(this.heap.length - 1);
// 	}
// 	remove() {
// 		if (this.heap.length === 0) return null;
// 		if (this.heap.length === 1) return this.heap.pop();
// 		const root = this.heap[0];
// 		this.heap[0] = this.heap.pop();
// 		this.heapifyDown(0);
// 		return root;
// 	}
// 	printHeap() {
// 		console.log("HEAP: ", this.heap);
// 	}
// 	heapSort(arr) {
// 		const heap = new MaxHeap();
// 		const sorted = [];
// 		for (const val of arr) {
// 			heap.insert(val);
// 		}
// 		while (heap.heap.length > 0) {
// 			sorted.push(heap.remove());
// 		}
// 		console.log(sorted.join(" -> "));
// 	}
// }

// const heap = new MaxHeap();
// heap.insert(2);
// heap.insert(1);
// heap.insert(4);
// heap.insert(9);
// heap.insert(5);
// heap.insert(8);
// heap.printHeap();
// heap.heapSort([5, 4,8,6,5,4,3,65,7,8,9,6,5,34,6567,547,68,756,8576,8,7,67,9678,3])

//*=========================================== *//
//! ================== Trie ================== !//
//* ========================================== *//

// class TrieNode {
// 	constructor() {
// 		this.children = {};
// 		this.isEndOfWord = false;
// 	}
// }

// class Trie {
// 	constructor() {
// 		this.root = new TrieNode();
// 	}
// 	insert(word) {
// 		let curr = this.root;
// 		for (const char of word) {
// 			if (!curr.children[char]) {
// 				curr.children[char] = new TrieNode();
// 			}
// 			curr = curr.children[char];
// 		}
// 		curr.isEndOfWord = true;
// 	}
// 	search(word) {
// 		let curr = this.root;
// 		for (const char of word) {
// 			if (!curr.children[char]) return false;
// 			curr = curr.children[char];
// 		}
// 		return curr.isEndOfWord;
// 	}
// 	longestPrefix() {
// 		let curr = this.root;
// 		let prefix = "";
// 		while (curr) {
// 			const keys = Object.keys(curr.children);
// 			if (keys.length !== 1 || curr.isEndOfWord) break
// 			const char = keys[0];
// 			prefix += char;
// 			curr = curr.children[char];
//       }
// 		return prefix;
// 	}
//    autoComplete(prefix) {
//       let words = []
//       let curr = this.root
//       for(const char of prefix) {
//          if(!curr.children[char]) return words
//          curr = curr.children[char]
//       }
//       this.collectWords(prefix, words, curr)
//       return words
//    }
//    collectWords(prefix, words, curr) {
//       if(curr.isEndOfWord) words.push(prefix)
//       for(let key in curr.children) {
//          this.collectWords(prefix + key, words, curr.children[key])
//       }
//    }
// }

// const trie = new Trie();
// trie.insert("hello");
// trie.insert("helSui");
// trie.insert("hel");
// console.log(trie.search("hello"));
// console.log(trie.longestPrefix());
// console.log(trie.autoComplete("he"));

//*============================================ *//
//! ================== Graph ================== !//
//* =========================================== *//

// class Graph {
// 	constructor() {
// 		this.adjacencyList = {};
// 	}
// 	addVertex(vertex) {
// 		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
// 	}
// 	addEdge(vertex1, vertex2) {
// 		if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
// 		if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
// 		this.adjacencyList[vertex1].add(vertex2);
// 		this.adjacencyList[vertex2].add(vertex1);
// 	}
// 	removeEdge(vertex1, vertex2) {
// 		this.adjacencyList[vertex1].delete(vertex2);
// 		this.adjacencyList[vertex2].delete(vertex1);
// 	}
// 	removeVertex(vertex) {
// 		if (!this.adjacencyList[vertex])
// 			return console.log("Vertex not found!");
// 		for (const adjacentVertex of this.adjacencyList[vertex]) {
// 			this.removeEdge(adjacentVertex, vertex);
// 		}
// 		delete this.adjacencyList[vertex];
// 	}
// 	hasEdge(vertex1, vertex2) {
// 		return (
// 			this.adjacencyList[vertex1].has(vertex2) &&
// 			this.adjacencyList[vertex2].has(vertex1)
// 		);
// 	}
// 	display() {
// 		for (const vertex in this.adjacencyList) {
// 			console.log(vertex, " -> ", ...this.adjacencyList[vertex]);
// 		}
// 	}
// 	dfs(start) {
// 		const stack = [start];
// 		const visited = new Set();
// 		visited.add(start);

// 		while (stack.length > 0) {
// 			const vertex = stack.pop();
// 			console.log(vertex);
// 			for (const nei of this.adjacencyList[vertex]) {
// 				if (!visited.has(nei)) {
// 					stack.push(nei);
// 					visited.add(nei);
// 				}
// 			}
// 		}
// 	}
//    bfs(start) {
//       const queue = [start]
//       const visited = new Set()
//       visited.add(start)
//       while(queue.length > 0) {
//          const vertex = queue.shift()
//          console.log(vertex)
//          for(const nei of this.adjacencyList[vertex]) {
//             if(!visited.has(nei)) {
//                queue.push(nei)
//                visited.add(nei)
//             }
//          }
//       }
//    }
// }

// const graph = new Graph();
// graph.addEdge("A", "B");
// graph.addEdge("A", "D");
// graph.addEdge("A", "R");
// graph.addEdge("B", "C");
// graph.addEdge("D", "E");
// graph.display();
// console.log("\n")
// graph.bfs("A");
// console.log("\n")
// graph.dfs("A");

// class TreeNode {
//    constructor(val) {
//       this.val = val
//       this.children = []
//    }
//    addChild(val) {
//       const node = new TreeNode(val)
//       this.children.push(node)
//       return node
//    }
// }

// class Tree {
//    constructor(val) {
//       this.root = new TreeNode(val)
//    }
//    print(node = this.root) {
//       console.log(node.val)
//       for(const child of node.children) {
//          this.print(child)
//       }
//    }
// }

// const tree = new Tree("Root")
// const child1 = tree.root.addChild("Child1")
// const child2 = tree.root.addChild("Child2")
// child1.addChild("gchild1")
// child2.addChild("gchild2")
// tree.print()