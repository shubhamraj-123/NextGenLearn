import React, { useEffect, useState } from "react";

const codeLines = [
  "<!DOCTYPE html>",
  "<html>",
  "<head><title>Example</title>",
  '<link rel="stylesheet" href="styles.css">',
  "</head>",
  "<body>",
  '<h1><a href="/">Header</a></h1>',
  "<nav>",
  '  <a href="one">One</a>',
  '  <a href="two/">Two</a>',
  '  <a href="three/">Three</a>',
  "</nav>",
  "</body>",
  "</html>",
];

const DynamicCodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      const currentLine = codeLines[lineIndex];
      if (charIndex <= currentLine.length) {
        const updatedLine = currentLine.substring(0, charIndex);
        const newDisplayedCode = [...displayedCode];
        newDisplayedCode[lineIndex] = updatedLine;
        setDisplayedCode(newDisplayedCode);
        const timeout = setTimeout(() => setCharIndex(charIndex + 1), 30);
        return () => clearTimeout(timeout);
      } else {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="bg-gradient-to-r from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black flex flex-col md:flex-row items-center justify-center px-6 md:px-18 py-12 text-black dark:text-white transition-colors duration-500">
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h4 className="text-yellow-600 dark:text-yellow-500 font-bold text-lg mb-2">
          Instant Replit
        </h4>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Code On-the-Go with <br className="hidden md:block" />
          Instant Replit
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Whether you're fine-tuning your code or exploring new languages,
          Replit simplifies the coding process, making it faster and more
          accessible for every developer.
        </p>
        <a href="#">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
            Try it Yourself
          </button>
        </a>
      </div>

      {/* Right Side */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black rounded-xl p-4 sm:p-6 w-full max-w-full md:max-w-2xl shadow-lg border border-gray-300 dark:border-gray-700 transition duration-500 transform hover:-translate-y-1 hover:scale-[1.02] ease-in-out min-w-0">
        <div className="overflow-auto max-h-[70vh] hide-scrollbar">
          <pre className="text-orange-600 dark:text-orange-400 font-mono text-xs sm:text-sm md:text-base whitespace-pre leading-6 break-words">
            {displayedCode.map((line, index) => (
              <div key={index} className="flex min-w-0">
                <span className="text-gray-400 dark:text-gray-500 w-6 sm:w-8 text-right pr-2 sm:pr-3 shrink-0">
                  {index + 1}
                </span>
                <span className="break-words">{line}</span>
              </div>
            ))}
            <div className="flex min-w-0">
              <span className="text-gray-400 dark:text-gray-500 w-6 sm:w-8 text-right pr-2 sm:pr-3 shrink-0">
                {displayedCode.length + 1}
              </span>
              <span className="animate-pulse w-0.5 h-4 bg-orange-600 dark:bg-orange-400 inline-block" />
            </div>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DynamicCodeBlock;
