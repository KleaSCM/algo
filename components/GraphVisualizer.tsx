import React, { useState } from 'react';
import styles from '../styles/GraphVisualizer.module.scss';

interface GraphProps {
  algorithm: 'bfs' | 'dfs';
}

interface GraphData {
  [key: string]: string[];
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
      if (!visitedNodes.includes(node)) {
        visitedNodes.push(node);
        setVisited((prev) => [...prev, node]);
        setCurrentNode(node);

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

        const neighbors = graphData[node]; // Now safe
        neighbors.forEach((neighbor: string) => {
          if (!visitedNodes.includes(neighbor)) {
            if (algorithm === 'bfs') {
              queue.push(neighbor); // BFS
            } else {
              queue.unshift(neighbor); // DFS
            }
          }
        });
      }
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

            {graphData[node].map((neighbor: string, i: number) => (
              <line
                key={`${node}-${neighbor}`}
                x1={100 + idx * 100}
                y1={100 + (idx % 2 === 0 ? 50 : -50)}
                x2={100 + (Object.keys(graphData).indexOf(neighbor) * 100)} // Corrected position
                y2={100 + ((Object.keys(graphData).indexOf(neighbor) % 2 === 0) ? 50 : -50)} // Corrected position
                className={styles.graphLine}
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
          The <strong>Breadth-First Search (BFS)</strong> and <strong>Depth-First Search (DFS)</strong> algorithms are fundamental graph traversal techniques. BFS explores nodes level by level, while DFS explores as far as possible along each branch before backtracking.
        </p>
      </div>
    </div>
  );
};

export default GraphVisualizer;
