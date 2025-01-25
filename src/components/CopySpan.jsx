import { useState } from "react";

function CopySpan({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy!", error);
    }
  };

  return (
    <span
      onClick={handleCopyClick}
      // Toggle class/appearance based on `copied` state
      className={`absolute top-7 right-0 text-sm cursor-pointer rounded-md border px-1
       ${
         copied
           ? "text-green-500 border-green-500"
           : "text-gray-200 hover:border-yellow-500 hover:text-yellow-500"
       }
      `}
    >
      {copied ? "Copied!" : text}
    </span>
  );
}

export default CopySpan;
