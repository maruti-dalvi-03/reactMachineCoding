import CodeBlock from "../components/CodeBlock";
import StarRatingSolution from "../solutions/StarRatingSolution";

function StarRatingDoc() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* DOCUMENTATION */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Star Rating App</h1>

        <div>
          <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
          <p className="text-gray-700">
            Build a star rating component with 5 stars. Clicking on a star should
            set the rating to that value.
            
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Approach</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Use useState for managing star rating state</li>
            <li>Use an array of stars to represent the rating</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Code Snippet</h2>
          <CodeBlock
  code={`import { useState } from "react";

export default function StarRatingSolution() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1 text-3xl cursor-pointer">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={(hover || rating) >= star ? "text-yellow-400" : "text-gray-300"}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600">
        Selected Rating: {rating}
      </p>
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
        <StarRatingSolution />
      </section>

    </div>
  );
}

export default StarRatingDoc;
