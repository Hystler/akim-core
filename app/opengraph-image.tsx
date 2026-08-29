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
          padding: "50px 58px",
          color: "#2B211F",
          background: "#F1ECE3",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(43,33,31,0.18)",
            fontSize: "16px"
          }}
        >
          <span style={{ fontWeight: 700 }}>AKIM CORE</span>
          <span style={{ color: "#7F102B", fontWeight: 700 }}>PRESENTATION DESIGN</span>
        </div>

        <div style={{ display: "flex", flex: 1, alignItems: "center", paddingTop: "38px" }}>
          <div style={{ display: "flex", width: "57%", flexDirection: "column" }}>
            <div style={{ fontSize: "64px", lineHeight: 1.02, fontWeight: 700 }}>
              Сложное становится ясным.
            </div>
            <div
              style={{
                marginTop: "22px",
                maxWidth: "570px",
                fontSize: "29px",
                lineHeight: 1.35,
                color: "#7F102B",
                fontFamily: "Georgia, serif",
                fontStyle: "italic"
              }}
            >
              И начинает убеждать.
            </div>
            <div
              style={{
                marginTop: "34px",
                width: "92px",
                height: "3px",
                background: "#7F102B"
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
                  border: "10px solid #EFE4D5",
                  backgroundImage: `url(${siteUrl}${cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 24px 60px rgba(42,33,32,0.24)",
                  transform: `rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)`
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
