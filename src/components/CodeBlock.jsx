import { useState } from "react";

export default function CodeBlock({ code }) {
  const [showCode, setShowCode] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border rounded-md bgwhite">
      
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
        <button
          onClick={() => setShowCode(prev => !prev)}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>

        <button
          onClick={handleCopy}
          className="text-sm text-gray-600 hover:text-black"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* CODE */}
      {showCode && (
        <pre className="p-4 overflow-x-auto bg-gray-900 text-green-200 text-sm">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
