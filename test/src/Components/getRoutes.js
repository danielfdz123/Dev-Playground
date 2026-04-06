import { SubwayLines } from "../Stations/SubwayLines";

/**
 * Build a station graph:
 * Each station connects to previous + next station in its line.
 */
function buildGraph() {
  const graph = {};

  for (const line in SubwayLines) {
    const stations = SubwayLines[line];

    for (let i = 0; i < stations.length; i++) {
      const station = stations[i];

      if (!graph[station]) {
        graph[station] = new Set();
      }

      // connect to previous station
      if (stations[i - 1]) {
        graph[station].add(stations[i - 1]);
      }

      // connect to next station
      if (stations[i + 1]) {
        graph[station].add(stations[i + 1]);
      }
    }
  }

  return graph;
}



/**
 * Find top routes from start → end using BFS
 */
export function getRoutes(start, end, maxRoutes = 3) {
  const graph = buildGraph();

  const queue = [[start, [start]]];
  const results = [];
  const visitedPaths = new Set();

  while (queue.length > 0 && results.length < maxRoutes) {
    const [current, path] = queue.shift();

    // reached destination
    if (current === end) {
      const key = path.join("->");

      // avoid duplicate routes
      if (!visitedPaths.has(key)) {
        results.push(path);
        visitedPaths.add(key);
      }

      continue;
    }

    const neighbors = graph[current] || [];

    for (const neighbor of neighbors) {
      // prevent infinite loops
      if (!path.includes(neighbor)) {
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }

  return results;
}