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

//* ====== Factorial of a number ====== *//
// const factorial = (n) => {
// 	let fac = 1
//    for (let i = 2; i <= n; i++) {
//       fac *= i
//    }
//    return fac;
// };
// console.log(factorial(4))

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

//! ====== Search Algorithms ====== !//

//* ====== Linear Search ====== *//
// const arr = [4, 3, 23, 4, 53, 5, 6];

// const findTargetElement = (n) => {
// 	const index = arr.findIndex(val => n === val );
// 	if (!index) return -1;
// 	return index
// };
// console.log(findTargetElement(356));

//? Big O = O(n)

//* ====== Binary Search ====== *//
// const arr = [-3, -2, 1, 3, 5, 6, 7, 8, 13];

// const findTargetElementUsingBinarySearch = (n) => {
// 	let leftIndex = 0;
// 	let rightIndex = arr.length - 1;
// 	while (leftIndex <= rightIndex) {
// 		let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
// 		if (n === arr[middleIndex]) return middleIndex;
// 		if (n < arr[middleIndex]) {
// 			rightIndex = middleIndex - 1;
// 		} else {
// 			leftIndex = middleIndex + 1;
// 		}
// 	}
// 	return -1;
// };

// console.log(findTargetElementUsingBinarySearch(11))

//? Big O = O(logn)

