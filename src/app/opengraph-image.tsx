import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Runze Zhu — Game Programmer";
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
          justifyContent: "center",
          padding: "80px",
          background: "#06050d",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(16,185,129,0.35), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(45,212,191,0.25), transparent 60%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "monospace", fontSize: 28, color: "#34d399" }}>
          <span>$</span>
          <span>~/portfolio</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            marginTop: 28,
          }}
        >
          <span>Runze Zhu</span>
          <span
            style={{
              background: "linear-gradient(90deg,#34d399,#2dd4bf)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            makes games feel good.
          </span>
        </div>
        <div style={{ marginTop: 32, color: "#a1a1aa", fontSize: 28 }}>
          Generalist programmer · UE5 · Anvil · Frostbite
        </div>
      </div>
    ),
    size,
  );
}
