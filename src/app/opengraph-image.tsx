import { ImageResponse } from "next/og";

export const alt = "Monte Tecnologia — Consultoria de tecnologia para e-commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#222f69",
          color: "#e9f2fa",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, textTransform: "uppercase", letterSpacing: -2 }}>
          Monte
          <span style={{ color: "#c7d1ff" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 34, color: "#a8b3d1" }}>
          Consultoria de tecnologia para e-commerce
        </div>
      </div>
    ),
    { ...size }
  );
}
