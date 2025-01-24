class TrieNode {
	constructor() {
		this.children = {};
		this.isEnd = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	insert(word) {
		let currentNode = this.root;
		for (const char of word) {
			if (!currentNode.children[char]) {
				currentNode.children[char] = new TrieNode();
			}
			currentNode = currentNode.children[char];
		}
		currentNode.isEnd = true;
	}
	search(word) {
		let currentNode = this.root;
		for (const char of word) {
			if (!currentNode.children[char]) {
				return false;
			}
			currentNode = currentNode.children[char];
		}
		return currentNode.isEnd;
	}
	startsWith(prefix) {
		let currentNode = this.root;
		for (const char of prefix) {
			if (!currentNode.children[char]) return false;
			currentNode = currentNode.children[char];
		}
		return true;
	}
	longestPrefix() {
		let crr = this.root;
		let prefix = "";
		while (crr) {
			let keys = Object.keys(crr);
			if (keys.length !== 1 || crr.isEnd) break;
         let char = keys[0]
		}
	} 
}

const trie = new Trie();

trie.insert("hello");
trie.insert("hel");
trie.insert("aadil");
console.log(trie.search("hello"));
console.log(trie.startsWith("aad"));
