import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #fbf6ef 0%, #f3ebdf 58%, #efe7dc 100%)",
          color: "#172033",
          padding: "64px",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(199,102,53,0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(36,56,95,0.16), transparent 26%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(23,32,51,0.08)",
            background: "rgba(255,255,255,0.64)",
            padding: "52px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#9a4221",
            }}
          >
            The Business of Talk
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 88, lineHeight: 0.95, fontWeight: 700 }}>
              High-stakes communication training.
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.3,
                color: "#42506a",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Executive communication coaching, media training, and crisis messaging for leaders in Atlanta and nationwide.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#42506a",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
