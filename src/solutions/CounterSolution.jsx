import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white flex flex-col gap-4 items-center justify-center 
                    border border-gray-200 p-10 rounded-lg shadow-sm w-full max-w-sm">
      
      <h4 className="text-lg font-semibold">Counter App</h4>

      <p className="text-gray-700 text-md">
        Count: <span className="font-bold">{count}</span>
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(prev => prev - 1)}
          disabled={count === 0}
          className="px-4 py-2 border rounded-md 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:bg-gray-100 transition"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
