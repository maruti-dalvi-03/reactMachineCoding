import CounterSolution from "../solutions/CounterSolution";
import CodeBlock from "../components/CodeBlock";

function CounterDoc() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* DOCUMENTATION */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Counter App</h1>

        <div>
          <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
          <p className="text-gray-700">
            Build a counter with increment, decrement, and reset functionality.
            The counter value should not go below zero.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Approach</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Use useState for managing counter state</li>
            <li>Disable decrement when count is zero</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Code Snippet</h2>
          <CodeBlock
  code={`import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter App</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <button
        onClick={() => setCount(prev => prev - 1)}
        disabled={count === 0}
      >
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`}
 />
    </div>
      </section>

      {/* LIVE PREVIEW */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <CounterSolution />
      </section>

    </div>
  );
}

export default CounterDoc;
