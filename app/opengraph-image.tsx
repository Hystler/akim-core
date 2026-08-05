import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "Аким Коваленко — дизайнер презентаций";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const covers = [
  "/portfolio/chess-jazz/chess-jazz-cover.png",
  "/portfolio/velvet-whisper/velvet-whisper-cover.png",
  "/portfolio/tatyana-vesennyaya/tatyana-vesennyaya-cover.png"
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 58px",
          color: "#F4EBDD",
          background: "linear-gradient(135deg, #04100D 0%, #14251D 100%)",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
            fontSize: "16px"
          }}
        >
          <span style={{ fontWeight: 700 }}>AKIM CORE</span>
          <span style={{ color: "#D8B875" }}>PRESENTATION DESIGN</span>
        </div>

        <div style={{ display: "flex", flex: 1, alignItems: "center", paddingTop: "38px" }}>
          <div style={{ display: "flex", width: "57%", flexDirection: "column" }}>
            <div style={{ fontSize: "62px", lineHeight: 1.04, fontWeight: 600 }}>
              Аким Коваленко
            </div>
            <div
              style={{
                marginTop: "22px",
                maxWidth: "570px",
                fontSize: "25px",
                lineHeight: 1.35,
                color: "rgba(244,235,221,0.72)"
              }}
            >
              Дизайнер презентаций
            </div>
            <div
              style={{
                marginTop: "34px",
                width: "92px",
                height: "3px",
                background: "#D8B875"
              }}
            />
          </div>

          <div style={{ position: "relative", display: "flex", width: "43%", height: "390px" }}>
            {covers.map((cover, index) => (
              <div
                key={cover}
                style={{
                  position: "absolute",
                  left: `${index * 56}px`,
                  top: `${index * 72}px`,
                  width: "370px",
                  height: "208px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "7px",
                  backgroundImage: `url(${siteUrl}${cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.42)"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
