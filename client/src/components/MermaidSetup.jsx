import React, { useRef, useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
});

const cleanMermaidChart = (diagram) => {
  if (!diagram) return "";

  let clean = diagram
    .replace(/\r?\n/g, "\n")
    .trim();

  if (!clean.startsWith("graph")) {
    clean = `graph TD\n${clean}`;
  }

  return clean;
};

// const autoFixNodes = (diagram) => {
//   let index = 0;
//   return diagram.replace(/\[(.*?)\]/g, (_, label) => {
//     index++;
//     return `N${index}[${label}]`;
//   });
// };

const autoFixNodes = (diagram) => {
  let index = 0;
  const used = new Map();

  return diagram.replace(/\[(.*?)\]/g, (match, label) => {
    // label ko clean karo
    const key = label.trim();

    // agar same label pehle aa chuka hai to wahi node reuse karo
    if (used.has(key)) {
      return used.get(key);
    }

    // naya id generate karo
    index++;
    const id = `N${index}`;

    // Mermaid node format
    const node = `${id}["${key}"]`;

    used.set(key, node);
    return node;
  });
};

const MermaidSetup = ({ diagram }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!diagram || !containerRef.current) return;

    const renderDiagram = async () => {
      try {
        containerRef.current.innerHTML = "";

        const uniqueId = `mermaid-${Math.random()
          .toString(36)
          .substring(2, 9)}`;

        const safeChart = autoFixNodes(
          cleanMermaidChart(diagram)
        );

        const { svg } = await mermaid.render(
          uniqueId,
          safeChart
        );

        containerRef.current.innerHTML = svg;
      } catch (error) {
        console.error("Mermaid render error:", error);
      }
    };

    renderDiagram();
  }, [diagram]);

  return (
    <div className="bg-white border rounded-lg p-4 overflow-x-auto">
      <div ref={containerRef}></div>
    </div>
  );
};

export default MermaidSetup;