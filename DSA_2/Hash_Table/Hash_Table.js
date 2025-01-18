// class HashTable {
// 	constructor(size) {
// 		this.table = new Array(size);
// 		this.size = size;
// 	}

// 	hash(key) {
// 		let total = 0;
// 		for (let i = 0; i < key.length; i++) {
// 			total += key.charCodeAt(i);
// 		}
// 		return total % this.size;
// 	}

// 	set(key, value) {
// 		const index = this.hash(key);
// 		// this.table[index] = value;
// 		const bucket = this.table[index];
// 		if (!bucket) {
// 			this.table[index] = [[key, value]];
// 		} else {
// 			const sameKeyItem = bucket.find((item) => item[0] === key);
// 			if (sameKeyItem) {
// 				sameKeyItem[1] = value;
// 			} else {
// 				bucket.push([key, value]);
// 			}
// 		}
// 	}
// 	get(key) {
// 		const index = this.hash(key);
// 		// return this.table[index];
// 		const bucket = this.table[index];
// 		if (bucket) {
// 			const sameKeyItem = bucket.find((item) => item[0] === key);
// 			if (sameKeyItem) return sameKeyItem[1];
// 		}
// 		return undefined;
// 	}
// 	remove(key) {
// 		const index = this.hash(key);
// 		if (this.table[index]) {
// 			const bucket = this.table[index];
// 			if (bucket) {
// 				const sameKeyItem = bucket.find((item) => item[0] === key);
// 				if (sameKeyItem) {
// 					return bucket.splice(bucket.indexOf(sameKeyItem), 1);
// 				}
// 			}
// 		}
// 		return console.log("Key not found");
// 	}
// 	display() {
// 		for (let i = 0; i < this.table.length; i++) {
// 			if (this.table[i]) console.log(i, this.table[i]);
// 		}
// 	}
// }

// class HashTable {
// 	constructor(size) {
// 		this.table = new Array(size);
// 		this.size = size;
// 	}
// 	hash(key) {
// 		let total = 0;
// 		for (let i = 0; i < key.length; i++) {
// 			total += key.charCodeAt(i);
// 		}
// 		return total % this.size;
// 	}

// 	set(key, val) {
// 		const index = this.hash(key);
// 		const bucket = this.table[index];
// 		if (!bucket) {
// 			this.table[index] = [[key, val]];
// 		} else {
// 			const sameKeyItem = bucket.find((item) => item[0] === key);
// 			if (sameKeyItem) {
// 				sameKeyItem[1] = val;
// 			} else {
// 				bucket.push([key, val]);
// 			}
// 		}
// 	}
// 	get(key) {
// 		const index = this.hash(key);
// 		const bucket = this.table[index];
// 		if (bucket) {
// 			const sameKeyItem = bucket.find((item => item[0] === key));
// 			if (sameKeyItem) return sameKeyItem[1];
// 		}
// 	}
// 	remove(key) {
// 		const index = this.hash(key)
// 		const bucket = this.table[index]
// 		if(bucket) {
// 			const sameKeyItem = bucket.find(item => item[0] === key)
// 			if(sameKeyItem) {
// 				bucket.splice(bucket.indexOf(sameKeyItem), 1)
// 				if(bucket.length === 0) this.table[index] = undefined
// 			}
// 		}
// 	}
// 	display() {
// 		for (let i = 0; i < this.size; i++) {
// 			if (this.table[i]) console.log(i, this.table[i]);
// 		}
// 	}
// }

// const table = new HashTable(50);

// table.set("name", "Bruce");
// table.set("mane", "Sulum");
// table.set("ma", "sa");
// table.set("age", "25");
// table.set("place", "VPZ");
// table.display();
// console.log("Nmae getting: ", table.get("name"));
// table.remove("name");
// table.remove("ma");
// table.remove("place");
// table.display();

class LinearProbing {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}

	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, val) {
		let index = this.hash(key);
		while (
			this.table[index] !== undefined &&
			this.table[index][0] !== key
		) {
			index = (index + 1) % this.size;
		}
		this.table[index] = [key, val];
	}
	get(key) {
		let index = this.hash(key);
		while (this.table[index] !== undefined) {
			if (this.table[index][0] === key) {
				return this.table[index][1];
			}
			index = (index + 1) % this.size;
		}
		return undefined;
	}
	remove(key) {
		let index = this.hash(key);
		while (this.table[index] !== undefined) {
			if (this.table[index][0] === key) {
				this.table[index] = undefined;
				return;
			}
			index = (index + 1) % this.size;
		}
	}
	display() {
		for (let i = 0; i < this.size; i++) {
			if (this.table[i]) {
				console.log(`${i} => `, this.table[i]);
			}
		}
	}
}
const table = new LinearProbing(50);

table.set("name", "Suiii");
table.set("mane", "Sulum");
table.set("age", "25");
table.set("place", "VPZ");
table.set("suiand", "ronrornror");
table.display();
console.log("Nmae getting: ", table.get("name"));
table.remove("naem");
table.remove("age");
table.display();
