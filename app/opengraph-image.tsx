import { ImageResponse } from "next/og";

export const alt = "DSA & System Design by Anindya Dey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafaf7",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            letterSpacing: 2,
            color: "#2f6f5e",
          }}
        >
          dsa.and().design
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              color: "#242833",
              lineHeight: 1.05,
            }}
          >
            Recognize the pattern.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              color: "#2f6f5e",
              lineHeight: 1.05,
            }}
          >
            Solve anything.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#5a5f6b" }}>
          Data Structures &amp; Algorithms · System Design
        </div>
      </div>
    ),
    size,
  );
}
