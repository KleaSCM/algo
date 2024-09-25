import React from 'react';
import styles from '../styles/Explanation.module.scss';
import Navbar from '../components/Navbar'; 

const ExplanationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar /> 
      <h1>Algorithm Explanations</h1>
      
      <h2>Sorting Algorithms</h2>
      
      <h3>Bubble Sort</h3>
      <p>
        Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list.
      </p>
      <h4>Pseudocode:</h4>
      <pre>
        {`function bubbleSort(arr):
    n = length(arr)
    for i from 0 to n-1:
        for j from 0 to n-i-2:
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])`}
      </pre>
      <h4>Time Complexity Analysis:</h4>
      <ul>
        <li><strong>Best Case:</strong> O(n) — Occurs when the array is already sorted.</li>
        <li><strong>Average Case:</strong> O(n²) — Requires multiple passes through the array.</li>
        <li><strong>Worst Case:</strong> O(n²) — Occurs when the array is sorted in reverse order.</li>
      </ul>
      <h4>Space Complexity:</h4>
      <p>O(1) — In-place sorting algorithm.</p>
      
      <h4>Mathematical Explanation:</h4>
      <p>
        Bubble Sort operates through repeated comparisons and swaps. For example, given an array [5, 2, 9, 1, 5, 6], the algorithm will make multiple passes until the array is sorted, comparing adjacent elements and moving larger elements to the right.
      </p>
      
      <h4>Use Cases in Software Engineering:</h4>
      <p>
        While Bubble Sort is not efficient for large datasets, it can be useful for educational purposes and in scenarios where simplicity is more important than performance.
      </p>
      
      <h2>Graph Traversal Algorithms</h2>
      
      <h3>Breadth-First Search (BFS)</h3>
      <p>
        BFS explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level. It uses a queue to keep track of the nodes to be explored.
      </p>
      <h4>Pseudocode:</h4>
      <pre>
        {`function BFS(graph, start):
    queue = []
    visited = []
    queue.enqueue(start)
    while not queue.isEmpty():
        node = queue.dequeue()
        if node not in visited:
            visited.append(node)
            for neighbor in graph[node]:
                queue.enqueue(neighbor)`}
      </pre>
      <h4>Time Complexity Analysis:</h4>
      <p>O(V + E) — Where V is the number of vertices and E is the number of edges.</p>
      <h4>Space Complexity:</h4>
      <p>O(V) — Requires space to store the visited nodes and the queue.</p>
      
      <h4>Mathematical Explanation:</h4>
      <p>
        BFS traverses the graph level by level, ensuring the shortest path in unweighted graphs is found.
      </p>
      
      <h4>Use Cases in Software Engineering:</h4>
      <p>
        BFS is widely used in finding the shortest path on unweighted graphs, social network analysis, and in web crawling.
      </p>
      
      <h3>Depth-First Search (DFS)</h3>
      <p>
        DFS explores as far as possible along a branch before backtracking. It can be implemented using recursion or a stack.
      </p>
      <h4>Pseudocode:</h4>
      <pre>
        {`function DFS(graph, node, visited):
    if node not in visited:
        visited.append(node)
        for neighbor in graph[node]:
            DFS(graph, neighbor, visited)`}
      </pre>
      <h4>Time Complexity Analysis:</h4>
      <p>O(V + E) — Similar to BFS, as each vertex and edge is processed.</p>
      <h4>Space Complexity:</h4>
      <p>O(V) — Requires space to store the visited nodes.</p>
      
      <h4>Mathematical Explanation:</h4>
      <p>
        DFS dives deep into the graph, making it useful for scenarios where you need to explore all paths, such as in puzzle solving or pathfinding algorithms.
      </p>
      
      <h4>Use Cases in Software Engineering:</h4>
      <p>
        DFS is effective in topological sorting, cycle detection in graphs, and solving mazes.
      </p>
    </div>
  );
};

export default ExplanationPage;
