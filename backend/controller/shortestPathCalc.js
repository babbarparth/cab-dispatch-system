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
  const distances = {};
  const predecessors = {}; // Keep track of predecessors for each vertex

  // Initialize distances and predecessors
  for (const vertex in graph) {
    distances[vertex] = vertex === source ? 0 : Infinity;
    predecessors[vertex] = null; // Initialize predecessors to null
  }

  const visited = {};

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

  for (let i = 0; i < Object.keys(graph).length; i++) {
    const currentVertex = getClosestVertex();
    visited[currentVertex] = true;

    for (const neighborVertex in graph[currentVertex]) {
      const totalDistance =
        distances[currentVertex] + graph[currentVertex][neighborVertex];
      if (totalDistance < distances[neighborVertex]) {
        distances[neighborVertex] = totalDistance;
        predecessors[neighborVertex] = currentVertex; // Update predecessor
      }
    }
  }

  return { distances, predecessors };
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
  const { source, destination } = req.body;

  if (!graph || !source || !destination) {
    return res.status(400).json({
      error: "Graph, source, and destination parameters are required.",
    });
  }

  const { distances, predecessors } = dijkstra(graph, source);

  const shortestPath = [];
  let currentVertex = destination;
  while (currentVertex !== null) {
    shortestPath.unshift(currentVertex); // Add current vertex to the beginning of the path
    currentVertex = predecessors[currentVertex]; // Move to the predecessor
  }

  res.json({ distances, shortestPath });
};
