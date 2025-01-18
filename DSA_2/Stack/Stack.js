// class Stack {
// 	constructor(size) {
// 		this.stack = [];
// 		this.size = size;
// 	}
//    push(val) {
//       if(this.size === this.stack.length) {
//          console.log("Stack Overflow!")
//          return
//       } else {
//          this.stack.push(val)
//          console.log(`Pushed to stack: ${val}`)
//       }
//    }
//    pop() {
//       if(this.size === 0) {
//          console.log("Stack Underflow!")
//          return
//       } else {
//          console.log(`Popped value from stack: ${this.stack.pop()}`)
//       }
//    }
//    display() {
//       console.log(`Stack Values Now: ${this.stack}`)
//    }
// }

// const stack = new Stack(6)

// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)
// stack.display()
// stack.pop()
// stack.display()

// function reverseString(str) {
// 	const stack = [];
// 	for (const char of str) {
// 		stack.push(char);
// 	}
// 	let reversed = "";
// 	while (stack.length > 0) {
//       reversed += stack.pop()
//    }
//    return reversed
// }

// console.log(reverseString("Hello"))

// function isBalanced(par) {
// 	const stack = [];
// 	const pairs = { ")": "(", "}": "{", "]": "[" };
//    for (const char of par) {
//       if(["{", "(", "["].includes(char)) {
//          stack.push(char)
//       } else if(["]", "}", ")"].includes(char)) {
//          if(stack.length === 0 || stack.pop() !== pairs[char]) {
//             return false
//          }
//       }
//    }
//    return stack.length === 0
// }

// console.log(isBalanced("{[]}"))
