import { useState } from 'react';
import styles from '../styles/GraphVisualizer.module.scss';

interface GraphProps {
  algorithm: 'bfs' | 'dfs';
}

interface GraphData {
  [key: string]: string[]; // Allow indexing with any string
}

const graphData: GraphData = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

const GraphVisualizer: React.FC<GraphProps> = ({ algorithm }) => {
  const [visited, setVisited] = useState<string[]>([]);
  const [currentNode, setCurrentNode] = useState<string | null>(null);

  const resetTraversal = () => {
    setVisited([]);
    setCurrentNode(null);
  };

  const traverseGraph = async (start: string) => {
    const queue: string[] = [start];
    const visitedNodes: string[] = [];

    while (queue.length) {
      const node = queue.shift()!;
      visitedNodes.push(node);
      setVisited([...visitedNodes]);
      setCurrentNode(node);

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

      const neighbors = graphData[node]; // Now safe
      neighbors.forEach((neighbor: string) => { // Explicitly type neighbor
        if (!visitedNodes.includes(neighbor)) {
          if (algorithm === 'bfs') {
            queue.push(neighbor); // BFS
          } else {
            queue.unshift(neighbor); // DFS
          }
        }
      });
    }
    setCurrentNode(null);
  };

  return (
    <div className={styles.graphContainer}>
      <div className={styles.controls}>
        <button onClick={() => traverseGraph('A')}>Start {algorithm.toUpperCase()}</button>
        <button onClick={resetTraversal}>Reset</button>
      </div>
      <svg width="600" height="400">
        {Object.keys(graphData).map((node, idx) => (
          <g key={node} className={styles.nodeGroup}>
            <circle
              cx={100 + idx * 100}
              cy={100 + (idx % 2 === 0 ? 50 : -50)}
              r="20"
              className={`${visited.includes(node) ? styles.visited : ''} ${currentNode === node ? styles.current : ''}`}
            />
            <text x={100 + idx * 100} y={105 + (idx % 2 === 0 ? 50 : -50)} textAnchor="middle">
              {node}
            </text>

            {graphData[node].map((neighbor: string, i: number) => ( // Explicitly type neighbor and i
              <line
                key={`${node}-${neighbor}`}
                x1={100 + idx * 100}
                y1={100 + (idx % 2 === 0 ? 50 : -50)}
                x2={100 + (idx + i + 1) * 100}
                y2={100 + ((idx + i + 1) % 2 === 0 ? 50 : -50)}
                className={styles.graphLine} // Add the class here
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
            ))}
          </g>
        ))}

        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
        </defs>
      </svg>

      {/* Explanation Section for Algorithms */}
      <div className={styles.algorithmExplanation}>
        <h3>Graph Traversal Algorithms: BFS and DFS</h3>
        <p>
          The <strong>Breadth-First Search (BFS)</strong> and <strong>Depth-First Search (DFS)</strong> algorithms are fundamental graph traversal techniques used to explore nodes and edges in a graph.
        </p>
        
        <h4>Breadth-First Search (BFS)</h4>
        <p>
          BFS explores the graph level by level. It starts from the root (or a selected node) and visits all its neighbors before moving on to the neighbors' neighbors. BFS is implemented using a queue data structure.
        </p>
        <h5>Pseudocode:</h5>
        <pre>
          <code>
            function BFS(start):
              let queue = [start]
              let visited = []
              
              while queue is not empty:
                node = queue.dequeue()
                if node is not in visited:
                  mark node as visited
                  for each neighbor of node:
                    queue.enqueue(neighbor)
          </code>
        </pre>

        <h4>Depth-First Search (DFS)</h4>
        <p>
          DFS explores as far as possible along each branch before backtracking. It can be implemented using a stack or via recursion. DFS dives deep into the graph, exploring one path until it can no longer proceed.
        </p>
        <h5>Pseudocode:</h5>
        <pre>
          <code>
            function DFS(node):
              mark node as visited
              for each neighbor of node:
                if neighbor is not visited:
                  DFS(neighbor)
          </code>
        </pre>
        <p>
          Both algorithms are useful for different applications. BFS is ideal for finding the shortest path in an unweighted graph, while DFS can be more memory efficient in deep graphs and is often used for solving puzzles and games.
        </p>
      </div>
    </div>
  );
};

export default GraphVisualizer;
