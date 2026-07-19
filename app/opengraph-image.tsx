import { ImageResponse } from "next/og";

import { SITE_CONFIG } from "@/lib/site";

export const alt = `${SITE_CONFIG.name} preview`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #0ea5e9 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "96px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, opacity: 0.78 }}>
        Next.js starter
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          marginTop: 24,
          textAlign: "center",
        }}
      >
        {SITE_CONFIG.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          lineHeight: 1.35,
          marginTop: 32,
          maxWidth: 900,
          opacity: 0.86,
          textAlign: "center",
        }}
      >
        {SITE_CONFIG.description}
      </div>
    </div>,
    size,
  );
}
