import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/* eslint-disable @next/next/no-img-element */

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoUrl = `${site.url}/images/business-of-talk-logo.png`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fbf6ef 0%, #f3ebdf 58%, #efe7dc 100%)",
          color: "#172033",
          padding: "56px",
          position: "relative",
          fontFamily: "Arial, sans-serif",
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
            alignItems: "center",
            justifyContent: "center",
            gap: "26px",
            width: "100%",
            height: "100%",
            borderRadius: "42px",
            border: "1px solid rgba(23,32,51,0.08)",
            background: "rgba(255,255,255,0.72)",
            padding: "52px",
          }}
        >
          <img
            src={logoUrl}
            alt="The Business of Talk logo"
            width="280"
            height="216"
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              textAlign: "center",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "820px",
              textTransform: "uppercase",
              color: "#172033",
            }}
          >
            High Stakes Communication Training
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: 1,
              color: "#42506a",
            }}
          >
            www.thebusinessoftalk.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
