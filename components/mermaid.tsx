"use client";

import { useEffect, useId, useRef, useState } from "react";

type MermaidApi = typeof import("mermaid").default;

let mermaidPromise: Promise<MermaidApi> | undefined;

function loadMermaid(): Promise<MermaidApi> {
  mermaidPromise ??= import("mermaid").then((module) => {
    const mermaid = module.default;
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "neutral",
      fontFamily: "inherit",
    });
    return mermaid;
  });
  return mermaidPromise;
}

// A short accessible name built from the diagram's own node labels, so a
// screen reader announces what the figure shows instead of just "Diagram".
function describeChart(chart: string): string {
  const labels = Array.from(
    chart.matchAll(/\w[[({]+"?([^\]"(){}|]+?)"?[\])}]+/g),
    (match) => match[1].trim(),
  ).filter(Boolean);
  const unique = [...new Set(labels)].slice(0, 6);
  return unique.length > 0 ? `Diagram: ${unique.join(", ")}` : "Diagram";
}

export function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const reactId = useId();
  const renderId = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    (async () => {
      try {
        const mermaid = await loadMermaid();
        const { svg } = await mermaid.render(renderId, chart);
        if (!cancelled) {
          container.innerHTML = svg;
          setError(null);
        }
      } catch (cause) {
        if (!cancelled) {
          setError(cause instanceof Error ? cause.message : String(cause));
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, renderId]);

  if (error) {
    return (
      <figure className="mermaid-figure not-prose" data-mermaid-error>
        <figcaption>Diagram could not be rendered</figcaption>
        <pre>
          <code>{chart}</code>
        </pre>
      </figure>
    );
  }

  return (
    <figure className="mermaid-figure not-prose">
      <div ref={containerRef} role="img" aria-label={describeChart(chart)} />
    </figure>
  );
}
