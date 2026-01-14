import React from 'react'
import CodeBlock from '../components/CodeBlock'
import PaginationSolution from '../solutions/PaginationSolution'

const PaginationDoc = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* DOCUMENTATION */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Pagination</h1>

        <div>
          <h2 className="text-xl font-semibold">Problem Statement</h2>
          <p>
            Display a list of items with pagination using Previous and Next
            buttons.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Approach</h2>
          <ul className="list-disc ml-5">
            <li>Store current page in state</li>
            <li>Calculate start and end index</li>
            <li>Slice array for current items</li>
            <li>Disable buttons at boundaries</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Code Snippet</h2>
          <CodeBlock
  code={`import { useState } from "react";
  
  export default function PaginationSolution() {
    const items = Array.from({ length: 20 }, (_, i) => Item {i + 1});
    const itemsPerPage = 7;
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    return (
      <div>
        <ul>
          {currentItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
  
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
  
        <span> Page {currentPage} </span>
  
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  }
  
`}
 />
    </div>
      </section>

      {/* LIVE PREVIEW */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <PaginationSolution />
      </section>

    </div>
  )
}

export default PaginationDoc
