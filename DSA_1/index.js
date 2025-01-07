//! ================== Math Algorithms ================== !//
//* ====== Fibonacci Sequence ====== *//
// const fibonacci = (n) => {
// 	const fib = [0, 1];
// 	for (let i = 2; i < n; i++) {
// 		fib[i] = fib[i - 1] + fib[i - 2];
// 	}
// 	return fib;
// };
// console.log(fibonacci(7));

//? Big O = O(n)

// const fibonacci = (n) => {
// 	let fib = [0, 1];
// 	for (let i = 2; i < n; i++) {
// 		fib[i] = fib[i-1] + fib[i-2]
// 	}
// 	console.log(fib)
// };
// const fib = (n) =>{
// 	if(n < 2) return n
// 	return fib(n-1) + fib(n-2)
// }

// console.log(fib(6))

//* ====== Factorial of a number ====== *//
// const factorial = (n) => {
// 	let fac = 1
//    for (let i = 2; i <= n; i++) {
//       fac *= i
//    }
//    return fac;
// };
// console.log(factorial(4))

// const factorial = (n) => {
// 	if (n < 1) return 1;
// 	return n * factorial(n - 1);
// };
// console.log(factorial(5))
//? Big O = O(n)

//* ====== Prime Number ====== *//
// const isPrime = (n) => {
// 	if (n < 2) return "Non-Prime";
// 	let flag = false;
// 	for (let i = 2; i <= Math.sqrt(n); i++) {
// 		if (n % i === 0) {
// 			flag = true;
// 			break;
// 		}
// 	}

// 	return flag ? "Non-Prime" : "Prime";
// };

// console.log(isPrime(1));

//? Big O = O(n)

//* ====== Power of Two ====== *//
// const isPowerOfTwo = (n) => {
// 	if (n < 1) return false;
// 	while (n > 1) {
// 		if (n % 2 !== 0) {
// 			return false;
// 		}
// 		n /= 2;
// 	}
// 	return true;
// };

// console.log(isPowerOfTwo(4))

//? Big O = O(logn)

//* Bitwise

// const isPowerOfTwoBitwise = (n) => {
// 	if (n < 1) return false;
// 	return (n & (n - 1)) === 0;
// };

// console.log(isPowerOfTwoBitwise(3))
// console.log(isPowerOfTwoBitwise(4))

//! ================== Recursion ================== !//

//* ====== Recursive Fibonacci Sequence ====== *//
// const recursiveFibonacci = (n) => {
// 	if (n < 2) return n;
// 	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// };

// console.log(recursiveFibonacci(6))

//? Big O = O(2^n)

//* ====== Recursive Factorial of a number ====== *//
// const recursiveFactorial = (n) => {
// 	if (n === 0) return 1;
// 	return n * recursiveFactorial(n - 1);
// };

// console.log(recursiveFactorial(5));

//? Big O = O(n)

//! ================== Search Algorithms ================== !//

//* ====== Linear Search ====== *//
// const arr = [4, 3, 23, 4, 53, 5, 6];

// const findTargetElement = (n) => {
// 	const index = arr.findIndex(val => n === val );
// 	if (!index) return -1;
// 	return index
// };
// console.log("Linear Search")
// console.log(findTargetElement(53));

// //? Big O = O(n)

// //* ====== Binary Search ====== *//
// const arr2= [-3, -2, 1, 3, 5, 6, 7, 8, 13];

// const findTargetElementUsingBinarySearch = (n) => {
//    let leftIndex = 0;
// 	let rightIndex = arr2.length - 1;
// 	while (leftIndex <= rightIndex) {
//       let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
// 		if (arr2[middleIndex] === n) return middleIndex;
// 		if (arr2[middleIndex] > n) {
//          rightIndex = middleIndex - 1;
// 		} else {
//          leftIndex = middleIndex + 1;
// 		}
// 	}
//    return -1;
// };

// console.log("Binary Search")
// console.log(findTargetElementUsingBinarySearch(1));

//? Big O = O(logn)

//* ====== Recursive Binary Search ====== *//
// const arr = [-3, -2, 1, 3, 5, 6, 7, 8, 13];

// const search = (target, leftIndex, rightIndex) => {
// 	if (leftIndex > rightIndex) return -1;
// 	let middleIndex = Math.floor((rightIndex + leftIndex) / 2);

// 	if (target === arr[middleIndex]) return middleIndex;
// 	if (target > arr[middleIndex]) {
// 		return search(target, middleIndex + 1, rightIndex);
// 	} else {
// 		return search(target, leftIndex, middleIndex - 1);
// 	}
// };

// const recursiveBinarySearch = (n) => {
// 	return search(n, 0, arr.length - 1);
// };
// console.log("Binary search with Recursion : ")
// console.log(recursiveBinarySearch(5));

//? Big O = O(logn)

//! ================== Sorting Algorithms ================== !//

//* ====== Bubble Sorting ====== *//
const arr = [-3, 65, 7, 67, 32, 344, -2, 1, 12, 3, 32, 5, 6, 7, 8, 13];

const bubbleSort = () => {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
};

console.log(bubbleSort(arr));

//? Big O = O(n^2)

//* ================================================= *//
//! ================== Linked List ================== !//
//* ================================================= *//

//* ====== with head only ====== *//
// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	//? Big O of prepend = O(1)
// 	prepend(value) {
// 		const node = new Node(value);
// 		if (!this.isEmpty()) node.next = this.head;
// 		this.head = node;
// 		this.size++;
// 	}

// 	//? Big O of append = O(n)
// 	append(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 		} else {
// 			let prev = this.head;
// 			while (prev.next) {
// 				prev = prev.next;
// 			}
// 			prev.next = node;
// 		}
// 		this.size++;
// 	}

// 	insert(value, index) {
// 		if (index < 0 || index > this.size) {
// 			return console.log("INVALID INDEX.");
// 		}
// 		if (index === 0) {
// 			this.prepend(value);
// 		} else {
// 			const node = new Node(value);
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			node.next = prev.next;
// 			prev.next = node;
// 			this.size++;
// 		}
// 	}

// 	removeFrom(index) {
// 		if (index < 0 || index >= this.size)
// 			return console.log("INVALID INDEX !");
// 		let removedNode;
// 		if (index === 0) {
// 			removedNode = this.head;
// 			this.head = this.head.next;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			removedNode = prev.next;
// 			prev.next = removedNode.next;
// 		}
// 		this.size--;
// 		return removedNode.value;
// 	}

// 	removeValue(value) {
// 		if (this.isEmpty()) return null;
// 		if (value === this.head.value) {
// 			this.head = this.head.next;
// 		} else {
// 			const removedNodeValue = null;
// 			let prev = this.head;
// 			while (prev.next && prev.next.value !== value) {
// 				prev = prev.next;
// 			}
// 			if (prev.next) {
// 				removedNodeValue = prev.next;
// 				prev.next = removedNodeValue.next;
// 			} else {
// 				return "INVALID VALUE !";
// 			}
// 		}
// 		this.size--;
// 		return value;
// 	}

// 	searchValue(value) {
// 		if (this.isEmpty()) return -1;
// 		let prev = this.head;
// 		let i = 0;
// 		while (prev) {
// 			if (prev.value === value) {
// 				return i;
// 			}
// 			prev = prev.next;
// 			i++;
// 		}
// 		return -1
// 	}

// 	reverse() {
// 		if(this.isEmpty()) return null
// 		let prev = null
// 		let curr = this.head
// 		while(curr) {
// 			let next = curr.next
// 			curr.next = prev
// 			prev = curr
// 			curr = next
// 		}
// 		this.head = prev
// 	}

// 	print() {
// 		if (this.isEmpty()) {
// 			console.log("List is Empty");
// 		} else {
// 			let curr = this.head;
// 			let listValues = "";
// 			while (curr) {
// 				listValues += `${curr.value} `;
// 				curr = curr.next;
// 			}
// 			console.log(listValues);
// 		}
// 	}
// }

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.append(40);
// list.append(50);
// list.insert(4, 5);
// list.print();
// // console.log("REMOVED", list.removeValue(4332));
// // console.log("Searching", list.searchValue(10));
// // console.log("Size", list.getSize());
// list.reverse()
// list.print();

//* ====== with head and tail ====== *//

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.size = 0;
// 	}

// 	isEmpty() {
// 		return this.size === 0;
// 	}

// 	getSize() {
// 		return this.size;
// 	}

// 	prepend(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}

// 	append(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}

// 	removeFromFront() {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		const value = this.head.value;
// 		this.head = this.head.next;
// 		this.size--;
// 		return value;
// 	}

// 	removeFromEnd() {
// 		if (this.isEmpty()) return null;
// 		const value = this.tail.value;
// 		if (this.size === 1) {
// 			this.head = null;
// 			this.tail = null;
// 		} else {
// 			let prev = this.head;
// 			while (prev.next !== this.tail) {
// 				prev = prev.next;
// 			}
// 			prev.next = null;
// 			this.tail = prev;
// 		}
// 		this.size--;
// 		return value;
// 	}

// 	print() {
// 		if (this.isEmpty()) {
// 			console.log("List is empty");
// 		} else {
//          let curr = this.head;
//          console.log(curr)
// 			let listValues = "";
// 			while (curr) {
// 				listValues += `${curr.value} `;
// 				curr = curr.next;
// 			}
// 			console.log(listValues);
// 		}
// 	}
// }

// const list = new LinkedList()

// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.prepend(0)
// list.print()
// console.log("List Size ", list.getSize())
// console.log(list.removeFromEnd())
// console.log(list.removeFromFront())
// list.print()
// console.log("List Size ", list.getSize())

//* ====== Array to LinkedList ====== *//

// class ListNode {
// 	constructor(val = 0, next = null) {
// 		this.val = val;
// 		this.next = next;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}

// 	arrayToLinkedList(arr) {
// 		if (arr.length < 1) return null;
// 		this.head = new ListNode(arr[0]);
// 		let curr = this.head;
// 		for (let i = 1; i < arr.length; i++) {
// 			curr.next = new ListNode(arr[i]);
// 			curr = curr.next;
// 		}
// 		this.size += arr.length;
// 		return this.head;
// 	}

// 	addAtHead(val) {
// 		const newNode = new ListNode(val);
// 		if (!this.head) {
// 			this.head = newNode;
// 		} else {
// 			newNode.next = this.head;
// 			this.head = newNode;
// 		}
// 		this.size++;
// 	}

// 	addAtEnd(val) {
// 		let newNode = new ListNode(val);
// 		if (!this.head) {
// 			this.head = newNode;
// 		} else {
// 			let curr = this.head;
// 			while (curr && curr.next) {
// 				curr = curr.next;
// 			}
// 			curr.next = newNode;
// 		}
// 		this.size++;
// 	}

// 	deleteNode(val) {
// 		if (this.size === 0) return null;
// 		if (this.head.val === val) {
// 			this.head = this.head.next;
// 		}
// 		let curr = this.head;
// 		while (curr && curr.next) {
// 			if (curr.next.val === val) {
// 				curr.next = curr.next.next;
// 				this.size--;
// 			} else {
// 				curr = curr.next;
// 			}
// 		}
// 	}

// 	getSize() {
// 		console.log(this.size);
// 	}

// 	print() {
// 		if (this.size < 1) return null;
// 		let curr = this.head;
// 		let listValues = "";
// 		while (curr) {
// 			listValues += `${curr.val} -> `;
// 			curr = curr.next;
// 		}
// 		console.log(listValues);
// 	}

// 	printReverse() {
// 		let prev = null;
//       let curr = this.head
//       while(curr) {
//          let next = curr.next
//          curr.next = prev
//          prev = curr
//          curr = next
//       }
//       this.head = prev
// 	}

//    deleteDuplicates() {
//       if(this.size === 0) return null
//       let curr = this.head
//       while(curr && curr.next) {
//          if(curr.val === curr.next.val) {
//             curr.next = curr.next.next
//             this.size--
//          } else {
//             curr = curr.next
//          }
//       }
//    }

// }

// const li = new LinkedList();
// console.log(li.arrayToLinkedList([1, 1, 2, 3, 3, 4, 5, 6]));
// li.addAtEnd(5);
// li.addAtEnd(5);
// // li.deleteNode(5);
// // li.printReverse()
// li.print();
// li.getSize();
// li.deleteDuplicates()
// li.print();
// li.getSize();

// const arr = [3, 5, 8, 10, 14, 17, 21, 25, 28, 32];
// const target = 5

// function search(arr, leftIndex, rightIndex, val) {
// 	if (leftIndex > rightIndex) return -1;
// 	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
// 	if (arr[middleIndex] === val) return middleIndex;
// 	if (arr[middleIndex] > val) {
// 		return search(arr, leftIndex, middleIndex - 1, val);
// 	} else {
// 		return search(arr, middleIndex + 1, rightIndex, val);
// 	}
// }

// console.log(search(arr, 0, arr.length-1, target))

// function find(arr, val) {
// 	arr.sort((a, b) => a - b);
// 	console.log(arr);
// 	let leftIndex = 0;
// 	let rightIndex = arr.length - 1;
// 	while (leftIndex <= rightIndex) {
// 		let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
// 		if (arr[middleIndex] === val) return middleIndex;
// 		if (arr[middleIndex] > val) {
// 			rightIndex = middleIndex - 1;
// 		} else {
// 			leftIndex = middleIndex + 1;
// 		}
// 	}
// 	return -1;
// }

// console.log(find(arr, target));

// const recursiveFibonacci = (n) => {
// 	if (n < 2) return n;
// 	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// };

// console.log(recursiveFibonacci(6));

// const recursiveFactorial = (n) => {
// 	if (n === 0) return 1;
// 	return n * recursiveFactorial(n - 1);
// };

// console.log(recursiveFactorial(5))

// class LinkedNode {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	arrayToLinkedList(arr) {
// 		this.head = new LinkedNode(arr[0]);
// 		let curr = this.head;
// 		for (let i = 1; i < arr.length; i++) {
// 			curr.next = new LinkedNode(arr[i]);
// 			curr = curr.next;
// 		}
// 		this.size = arr.length;
// 	}
// 	reverse() {
// 		let prev = null;
// 		let curr = this.head;
// 		while (curr) {
// 			let next = curr.next;
// 			curr.next = prev;
// 			prev = curr;
// 			curr = next;
// 		}
// 		this.head = prev;
// 	}

// 	print() {
// 		let curr = this.head;
// 		let listValues = "";
// 		while (curr) {
// 			listValues += `${curr.val} => `;
// 			curr = curr.next;
// 		}
// 		console.log(listValues);
// 	}
// }

// const li = new LinkedList();
// li.arrayToLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// li.print();
// li.reverse();
// li.print();

// const arr = [1, 2, 3, 4, 5, 7, 6];

// const findKthlargest = (k) => {
// 	let largest = 0;
// 	let kthLargest = 0;
// 	arr.sort((a, b) => b - a);

// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if (i+1 === k) {
// 				return arr[i];
// 		}
// 	}
// };

// console.log(findKthlargest(1))


// const fibonacci = (val) => {
// 	if(val< 2) return val
// 	return fibonacci(val-1) + fibonacci(val-2)

// }

// console.log(fibonacci(6))
