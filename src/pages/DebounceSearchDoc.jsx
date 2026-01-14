import CodeBlock from "../components/CodeBlock";
import DebounceSearchSolution from "../solutions/DebounceSearchSolution";

function DebounceSearchDoc() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* DOCS */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Debounce Search</h1>

        <div>
          <h2 className="text-xl font-semibold">Problem Statement</h2>
          <p>
            Implement a debounced search input to filter a list efficiently.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Approach</h2>
          <ul className="list-disc ml-5">
            <li>Use controlled input for search</li>
            <li>Apply debounce using useEffect</li>
            <li>Clear timeout on re-render</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Code Snippet</h2>
          <CodeBlock
            code={`import { useState, useEffect } from "react";

export default function DebounceSearch() {
  const items = ["Apple", "Banana", "Orange"];
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {items
        .filter(item =>
          item.toLowerCase().includes(debounced.toLowerCase())
        )
        .map(item => (
          <div key={item}>{item}</div>
        ))}
    </div>
  );
}`}
          />
        </div>
      </section>

      {/* LIVE */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <DebounceSearchSolution />
      </section>

    </div>
  );
}

export default DebounceSearchDoc;
