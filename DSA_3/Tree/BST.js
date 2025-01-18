class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	isEmpty() {
		return this.root === null;
	}
	insert(val) {
		const node = new Node(val);
		if (this.isEmpty()) {
			this.root = node;
		} else {
			this.insertNode(this.root, node);
		}
	}
	insertNode(root, newNode) {
		if (newNode.val < root.val) {
			if (root.left === null) {
				root.left = newNode;
			} else {
				this.insertNode(root.left, newNode);
			}
		} else {
			if (root.right === null) {
				root.right = newNode;
			} else {
				this.insertNode(root.right, newNode);
			}
		}
	}

	search(root, val) {
		if (!root) {
			return false;
		} else {
			if (val === root.val) {
				return true;
			} else if (val < root.val) {
				return this.search(root.left, val);
			} else {
				return this.search(root.right, val);
			}
		}
	}

	preOrder(root) {
		if (root) {
			console.log(root.val);
			this.preOrder(root.left);
			this.preOrder(root.right);
		}
	}

	inOrder(root) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.val);
			this.inOrder(root.right);
		}
	}
	postOrder(root) {
		if (root) {
			this.postOrder(root.left);
			this.postOrder(root.right);
			console.log(root.val);
		}
	}
	levelOrder() {
		const queue = [];
		queue.push(this.root);
		while (queue.length) {
			let curr = queue.shift();
			console.log(curr.val);
			if (curr.left) {
				queue.push(curr.left);
			}
			if (curr.right) {
				queue.push(curr.right);
			}
		}
	}
	min(root) {
		if (!root.left) {
			return root.val;
		} else {
			return this.min(root.left);
		}
	}
	max(root) {
		if (!root.right) {
			return root.val;
		} else {
			return this.max(root.right);
		}
	}

	delete(val) {
		if(!val) throw new Error("Enter a value")
		this.root = this.deleteNode(this.root, val);
	}
	deleteNode(root, val) {
		if (root === null) {
			return root;
		}
		if (root.val > val) {
			root.left = this.deleteNode(root.left, val);
		} else if (root.val < val) {
			root.right = this.deleteNode(root.right, val);
		} else {
			if (!root.left && !root.right) return null;
			if (!root.right) return root.left;
			if (!root.left) return root.right;

			root.val = this.min(root.right);
			root.right = this.deleteNode(root.right, root.val);
		}
		return root;
	}

	isValid() {
		return this.isValidBST(this.root);
	}

	isValidBST(root, min = -Infinity, max = Infinity) {
		if (root === null) return true;
		if (root.val <= min || root.val >= max) return false;

		return (
			this.isValidBST(root.left, min, root.val) &&
			this.isValidBST(root.right, root.val, max)
		);
	}

	maxDepth(root) {
		if (root === null) return 0;
		let leftHeight = this.maxDepth(root.left);
		let rightHeight = this.maxDepth(root.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}

	secondLargest() {
		if (this.root === null) {
			return null;
		}
		let parent = null;
		let curr = this.root;

		while (curr.right) {
			parent = curr;
			curr = curr.right;
		}
		return parent.val;
	}

	findClosest(target) {
		if (this.root === null) throw new Error("Tree is empty");
		let currentNode = this.root;
		let closest = this.root.val;

		while (currentNode !== null) {
			if (
				Math.abs(target - currentNode.val) < Math.abs(target - closest)
			) {
				closest = currentNode.val;
			}
			if (currentNode.val > target) {
				currentNode = currentNode.left;
			} else if (currentNode.val < target) {
				currentNode = currentNode.right;
			} else {
				return currentNode.val;
			}
		}
		return closest
	}

	balanced() {
		return this.isBalanced(this.root) !== -1
	}
	isBalanced(root) {
		if(root === null) return 0
		let leftHeight = this.isBalanced(root.left)
		let rightHeight = this.isBalanced(root.right)
	
		if(Math.abs(leftHeight - rightHeight) > 1) return -1

		return Math.max(leftHeight, rightHeight) + 1
	}

}
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(13);
bst.insert(25);
bst.insert(3);
bst.insert(7);
bst.insert(6);
// console.log(bst.isEmpty());
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 10));
console.log("--------------------------");
// bst.preOrder(bst.root);
// console.log("--------------------------");
// bst.inOrder(bst.root);
// console.log("--------------------------");
// bst.postOrder(bst.root);
// console.log(bst.min(bst.root.right));
// console.log(bst.max(bst.root));
console.log("--------------------------");
bst.levelOrder();
console.log("--------------------------");
bst.delete(15);
bst.levelOrder();
console.log("Scnd Largest", bst.secondLargest());
console.log("Closest", bst.findClosest(13 ));
console.log("Balanced", bst.balanced());


// 		5
// 	  / \
//     3	  8
// 	/     \
//   2       4
