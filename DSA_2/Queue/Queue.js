//! ================== Queue ================== !//
class Queue {
   constructor() {
      this.items= []
   }
   enqueue(element) {
      this.items.push(element)
   }
   dequeue() {
      if(this.items.length === 0) return "Queue is empty"
      return this.items.shift()
   }
   peek() {
      if(this.items.length === 0) return "Queue is empty"
      return this.items[0]
   }
   display() {
      console.log(this.items.toString())
   }

}

const queue = new Queue()
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log("Peek value",queue.peek())
queue.display()
console.log( "Dequeued ",queue.dequeue())
queue.display()

// class Queue {
// 	constructor() {
// 		this.items = {};
// 		this.rear = 0;
// 		this.front = 0;
// 	}
// 	enqueue(element) {
// 		this.items[this.rear] = element;
// 		this.rear++;
// 	}
// 	dequeue() {
// 		delete this.items[this.front];
// 		this.front++;
// 	}
// 	peek() {
// 		console.log(this.items[this.front]);
// 	}
//    display() {
//       console.log(Object.values(this.items))
//    }
// }

// const queue = new Queue()
// queue.enqueue(56)
// queue.enqueue(4)
// queue.enqueue(3)
// queue.enqueue(76)
// queue.peek()
// queue.display()
// queue.dequeue()
// queue.display()

//! ================== Circular Queue ================== !//
// class CircularQueue {
// 	constructor(size) {
// 		this.queue = new Array(size);
// 		this.size = size;
// 		this.currentLength = 0;
// 		this.front = -1;
// 		this.rear = -1;
// 	}
// 	isFull() {
// 		return this.currentLength === this.size;
// 	}
// 	isEmpty() {
// 		return this.currentLength === 0;
// 	}
// 	enqueue(element) {
// 		if (this.isFull()) return console.log("Queue is Full!");
// 		if (this.front === -1) this.front = 0;
// 		this.rear = (this.rear + 1) % this.size;
// 		this.queue[this.rear] = element;
// 		this.currentLength++;
// 		console.log(`Element ${element} added to the queue at ${this.rear}`);
// 	}
// 	dequeue() {
// 		if (this.isEmpty()) return console.log("Queue is Empty!");
// 		const elem = this.queue[this.front];
// 		this.queue[this.front] = null;
// 		this.front = (this.front + 1) % this.size;
// 		this.currentLength--;
// 		if (this.isEmpty()) {
// 			this.front = this.rear = -1;
// 		}
// 		console.log(`Element ${elem} removed from the queue!`);
// 	}
// 	display() {
// 		if (this.isEmpty()) return console.log("Queue is Empty !");
// 		let res = "";
// 		let i = this.front;
// 		while (true) {
// 			res += `${this.queue[i]} => `;
// 			if (i === this.rear) break;
// 			i = (i + 1) % this.size;
// 		}
//       console.log(res)
// 	}
// }

// const cq = new CircularQueue(5)
// cq.enqueue(4)
// cq.enqueue(5)
// cq.enqueue(6)
// cq.enqueue(7)
// cq.enqueue(6)
// cq.enqueue(8)
// cq.display()
// cq.dequeue()
// cq.enqueue(8)
// cq.display()

//! ================== Priority Queue ================== !//
// class PriorityQueue {
// 	constructor() {
// 		this.queue = [];
// 	}
// 	isEmpty() {
// 		return this.queue.length === 0;
// 	}
// 	enqueue(val, priority) {
// 		const newNode = { val, priority };
// 		let added = false;
// 		for (let i = 0; i < this.queue.length; i++) {
// 			if (this.queue[i].priority > priority) {
// 				this.queue.splice(i, 0, newNode);
// 				added = true;
// 				break;
// 			}
// 		}
// 		if (!added) this.queue.push(newNode);
// 		console.log(`Task ${val} added with ${priority} priority.`);
// 	}
// 	dequeue() {
// 		if (this.isEmpty()) return console.log("This queue is empty");
// 		const removed = this.queue.shift();
// 		console.log(
// 			`Task ${removed.val} removed with ${removed.priority} priority.`
// 		);
// 	}
//    display() {
//       console.log(`P Queue : `, this.queue)
//    }
// }

// const pq = new PriorityQueue()
// pq.enqueue("Task a", 4)
// pq.enqueue("Task b", 3)
// pq.enqueue("Task c", 1)
// pq.enqueue("Task d", 2)
// pq.dequeue()
// pq.display()

//! ================== Double Ended Queue ================== !//

// class DoubleEndedQueue {
// 	constructor() {
// 		this.queue = [];
// 	}
// 	addToFront(val) {
// 		this.queue.unshift(val);
// 	}
// 	addToRear(val) {
// 		this.queue.push(val);
// 	}
// 	removeFromFront() {
// 		if (this.queue.length === 0) return console.log("EMPTYYY");
// 		this.queue.shift();
// 	}
// 	removeFromRear() {
// 		if (this.queue.length === 0) return console.log("EMPTYYY");
// 		this.queue.pop();
// 	}
//    display() {
//       console.log(this.queue)
//    }
// }

// const deque = new DoubleEndedQueue()

// deque.addToFront(3)
// deque.addToFront(1)
// deque.addToFront(2)
// deque.addToRear(4)
// deque.addToRear(5)
// deque.addToRear(2)
// deque.removeFromFront()
// deque.removeFromRear()
// deque.display()
