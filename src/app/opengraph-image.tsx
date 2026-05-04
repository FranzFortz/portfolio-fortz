import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafafa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.03em", color: "#0a0a0a" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 26, marginTop: 12, color: "#525252" }}>{siteConfig.role}</div>
        <div
          style={{
            fontSize: 26,
            marginTop: 28,
            maxWidth: 920,
            lineHeight: 1.35,
            color: "#171717",
          }}
        >
          {siteConfig.valueProposition}
        </div>
      </div>
    ),
    { ...size },
  );
}
