class Node {
  constructor(vertex, distance) {
    this.vertex = vertex;
    this.distance = distance;
  }
}

function compareNodes(a, b) {
  return a.distance > b.distance;
}

function dijkstra(graph, source) {
  const distances = {}; // Initialize an empty object to store distances

  // Initialize distances for all vertices except source to Infinity
  for (const vertex in graph) {
    distances[vertex] = vertex === source ? 0 : Infinity;
  }

  const visited = {}; // Keep track of visited vertices

  // Helper function to get the unvisited vertex with the minimum distance
  const getClosestVertex = () => {
    let minDistance = Infinity;
    let closestVertex = null;
    for (const vertex in distances) {
      if (!visited[vertex] && distances[vertex] < minDistance) {
        minDistance = distances[vertex];
        closestVertex = vertex;
      }
    }
    return closestVertex;
  };

  // Loop through all vertices
  for (let i = 0; i < Object.keys(graph).length; i++) {
    const currentVertex = getClosestVertex(); // Get closest unvisited vertex
    visited[currentVertex] = true; // Mark current vertex as visited

    // Update distances to its neighbors
    for (const neighborVertex in graph[currentVertex]) {
      const totalDistance =
        distances[currentVertex] + graph[currentVertex][neighborVertex];
      if (totalDistance < distances[neighborVertex]) {
        distances[neighborVertex] = totalDistance;
      }
    }
  }

  return distances; // Return the shortest distances object
}

class PriorityQueue {
  constructor(compareFn) {
    this.elements = [];
    this.compareFn = compareFn;
  }

  enqueue(element) {
    this.elements.push(element);
    this.sort();
  }

  dequeue() {
    return this.elements.shift();
  }

  sort() {
    this.elements.sort(this.compareFn);
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

const graph = {
  A: { B: 5, C: 7 },
  B: { D: 15, E: 20, A: 5 },
  C: { D: 5, E: 35, A: 7 },
  D: { F: 20, B: 15, C: 5 },
  E: { F: 10, B: 20, C: 35 },
  F: { E: 10, D: 20 },
};

export const findShortestPath = (req, res) => {
  const { source } = req.body;
  console.log(req.body);

  if (!graph || !source) {
    return res
      .status(400)
      .json({ error: "Graph and source parameters are required." });
  }

  //   let parsedGraph;
  //   try {
  //     parsedGraph = JSON.parse(graph);
  //   } catch (error) {
  //     return res.status(400).json({
  //       error: "Invalid graph parameter. Please provide a valid JSON object.",
  //     });
  //   }

  const distances = dijkstra(graph, source);

  res.json(distances);
};
