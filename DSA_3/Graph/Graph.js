class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set();
		}
	}
	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) {
			this.addVertex(vertex1);
		}
		if (!this.adjacencyList[vertex2]) {
			this.addVertex(vertex2);
		}
		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
	}
	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			console.log("vertex not found");
			return;
		}
		for (let adjacentVertex of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}
   bfs(start) {
      const queue = [start]
      const visited = new Set()
      visited.add(start)

      while(queue.length > 0) {
         const vertex = queue.shift()
         console.log(vertex)
         for(const nei of this.adjacencyList[vertex]) {
            if(!visited.has(nei)) {
               visited.add(nei)
               queue.push(nei)
            }
         }
      }
   }
   
	dfs(start, visited = new Set()) {
		if (!visited.has(start)) {
			console.log(start);
			visited.add(start);
			for (const nei of this.adjacencyList[start]) {
				this.dfs(nei, visited);
			}
		}
	}

	// dfsIterative(start) {
	//    const visited = new Set()
	//    const stack = [start]

	//    while(stack.length > 0) {
	//       const vertex = stack.pop()
	//       if(!visited.has(vertex)) {
	//          console.log(vertex);
	//          visited.add(vertex)
	//          for(const nei of this.adjacencyList[vertex]) {
	//             if(!visited.has(nei)) {
	//                stack.push(nei)
	//             }
	//          }

	//       }
	//    }
	// }
	display() {
		const graph = this.adjacencyList;
		for (const vertex in graph) {
			console.log(vertex, " -> ", ...this.adjacencyList[vertex]);
		}
	}
}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "F");
graph.addEdge("C", "D");
graph.addEdge("A", "E");
// graph.removeEdge("C", "D");
// graph.removeVertex("B");
console.log(graph.hasEdge("C", "D"));
graph.addVertex("C");
graph.display();
console.log("\n");
graph.bfs("A");
console.log("\n");
graph.dfs("A");
