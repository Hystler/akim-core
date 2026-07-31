import { ImageResponse } from "next/og";

export const runtime = "edge";

type VisualConfig = {
  brand: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  accent: string;
  background: string;
  panel: string;
  steps: string[];
  details: string[];
};

const visuals: Record<string, Record<string, VisualConfig>> = {
  "jk-finance": {
    cover: {
      brand: "JK FINANCE",
      eyebrow: "FRANCHISE MODEL / 2026",
      title: "Financial clarity\nfor every scenario",
      subtitle: "Unit economics · launch scenarios · decision interface",
      accent: "#77E6CF",
      background: "#06100E",
      panel: "#0D1B18",
      steps: ["Inputs", "Scenarios", "Economics", "Summary"],
      details: ["Base", "Growth", "Stress"]
    },
    overview: {
      brand: "JK FINANCE",
      eyebrow: "MODEL OVERVIEW",
      title: "One model.\nFour clear layers.",
      subtitle: "The structure moves from assumptions to a decision-ready summary.",
      accent: "#77E6CF",
      background: "#06100E",
      panel: "#0D1B18",
      steps: ["Assumptions", "Launch", "Operations", "Outcome"],
      details: ["Structure", "Logic", "Clarity"]
    },
    scenarios: {
      brand: "JK FINANCE",
      eyebrow: "SCENARIO COMPARISON",
      title: "Compare paths,\nnot spreadsheets.",
      subtitle: "Base, growth and stress scenarios remain visible in one context.",
      accent: "#77E6CF",
      background: "#06100E",
      panel: "#0D1B18",
      steps: ["Base", "Growth", "Stress", "Decision"],
      details: ["Costs", "Demand", "Capacity"]
    },
    structure: {
      brand: "JK FINANCE",
      eyebrow: "UNIT ECONOMICS",
      title: "See what drives\nthe model.",
      subtitle: "Cost blocks are grouped by meaning and connected to the scenario logic.",
      accent: "#77E6CF",
      background: "#06100E",
      panel: "#0D1B18",
      steps: ["Product", "Team", "Marketing", "Operations"],
      details: ["Fixed", "Variable", "Launch"]
    }
  },
  "contract-architect": {
    cover: {
      brand: "CONTRACT ARCHITECT",
      eyebrow: "B2B DOCUMENT WORKSPACE / 2026",
      title: "Contracts, risks\nand decisions — together.",
      subtitle: "Document review · risk mapping · approval history",
      accent: "#86C9FF",
      background: "#070A0E",
      panel: "#10151C",
      steps: ["Upload", "Review", "Resolve", "Approve"],
      details: ["Document", "Risks", "History"]
    },
    overview: {
      brand: "CONTRACT ARCHITECT",
      eyebrow: "DOCUMENT WORKSPACE",
      title: "One context\nfor every decision.",
      subtitle: "The document remains central while comments and risks stay connected.",
      accent: "#86C9FF",
      background: "#070A0E",
      panel: "#10151C",
      steps: ["Sections", "Comments", "Risks", "Decision"],
      details: ["Clause map", "Status", "Owner"]
    },
    review: {
      brand: "CONTRACT ARCHITECT",
      eyebrow: "CLAUSE REVIEW",
      title: "Find the issue.\nKeep the context.",
      subtitle: "Every risk is explained with text, owner and a clear next action.",
      accent: "#86C9FF",
      background: "#070A0E",
      panel: "#10151C",
      steps: ["Clause", "Context", "Risk", "Action"],
      details: ["Low", "Review", "Critical"]
    },
    approval: {
      brand: "CONTRACT ARCHITECT",
      eyebrow: "APPROVAL HISTORY",
      title: "Know what changed\nand why.",
      subtitle: "Statuses, owners and decisions remain visible across versions.",
      accent: "#86C9FF",
      background: "#070A0E",
      panel: "#10151C",
      steps: ["Draft", "Review", "Changes", "Approved"],
      details: ["Version", "Owner", "Decision"]
    }
  },
  "ai-youtube-script-agent": {
    cover: {
      brand: "SCRIPT AGENT",
      eyebrow: "HUMAN-CONTROLLED AI WORKFLOW / 2026",
      title: "From research\nto a structured script.",
      subtitle: "Research · outline · draft · editorial review",
      accent: "#8CB8FF",
      background: "#080A10",
      panel: "#111620",
      steps: ["Research", "Outline", "Draft", "Review"],
      details: ["Sources", "Structure", "Voice"]
    },
    workflow: {
      brand: "SCRIPT AGENT",
      eyebrow: "CONTROLLED WORKFLOW",
      title: "One stage.\nOne clear decision.",
      subtitle: "The author approves each output before the system moves forward.",
      accent: "#8CB8FF",
      background: "#080A10",
      panel: "#111620",
      steps: ["Topic", "Research", "Outline", "Script"],
      details: ["Input", "Check", "Approve"]
    },
    research: {
      brand: "SCRIPT AGENT",
      eyebrow: "RESEARCH MODE",
      title: "Sources first.\nDraft second.",
      subtitle: "Facts, references and assumptions stay separate from the written script.",
      accent: "#8CB8FF",
      background: "#080A10",
      panel: "#111620",
      steps: ["Sources", "Notes", "Claims", "Brief"],
      details: ["Verified", "Review", "Context"]
    },
    editor: {
      brand: "SCRIPT AGENT",
      eyebrow: "EDITORIAL REVIEW",
      title: "Shape the logic.\nKeep the voice.",
      subtitle: "Structure, transitions and tone are reviewed before the final export.",
      accent: "#8CB8FF",
      background: "#080A10",
      panel: "#111620",
      steps: ["Hook", "Argument", "Evidence", "Ending"],
      details: ["Logic", "Tone", "Pacing"]
    }
  }
};

function getConfig(slug: string, frame: string) {
  const project = visuals[slug];
  if (!project) return undefined;
  return project[frame] ?? project.cover;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string; frame: string }> }
) {
  const { slug, frame } = await params;
  const config = getConfig(slug, frame);

  if (!config) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "46px 52px",
          color: "#F3F4EF",
          background: `linear-gradient(135deg, ${config.background} 0%, ${config.panel} 100%)`,
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.16)",
            paddingBottom: "22px",
            fontSize: "14px",
            letterSpacing: "2px"
          }}
        >
          <span style={{ fontWeight: 700 }}>{config.brand}</span>
          <span style={{ color: "rgba(255,255,255,0.52)" }}>{config.eyebrow}</span>
        </div>

        <div style={{ display: "flex", flex: 1, paddingTop: "34px" }}>
          <div
            style={{
              width: "58%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingRight: "42px"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "58px",
                  lineHeight: 1.02,
                  fontWeight: 600,
                  whiteSpace: "pre-line",
                  letterSpacing: "0"
                }}
              >
                {config.title}
              </div>
              <div
                style={{
                  marginTop: "22px",
                  maxWidth: "560px",
                  fontSize: "19px",
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.6)"
                }}
              >
                {config.subtitle}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {config.steps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                    color: index === 0 ? config.accent : "rgba(255,255,255,0.48)",
                    fontSize: "14px"
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "24px",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                      border: `1px solid ${index === 0 ? config.accent : "rgba(255,255,255,0.2)"}`,
                      borderRadius: "50%",
                      fontSize: "11px"
                    }}
                  >
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "42%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.035)",
              padding: "24px"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)"
              }}
            >
              <span>WORKSPACE</span>
              <span style={{ color: config.accent }}>ACTIVE</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                height: "220px",
                marginTop: "28px",
                padding: "0 8px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.12)"
              }}
            >
              {[44, 68, 54, 86, 66, 96, 78].map((height, index) => (
                <div
                  key={height + index}
                  style={{
                    width: "38px",
                    height: `${height}%`,
                    marginRight: "15px",
                    borderRadius: "4px 4px 0 0",
                    background:
                      index === 5
                        ? config.accent
                        : "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))"
                  }}
                />
              ))}
            </div>

            <div style={{ display: "flex", marginTop: "22px" }}>
              {config.details.map((detail, index) => (
                <div
                  key={detail}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    marginRight: index < config.details.length - 1 ? "10px" : 0,
                    padding: "14px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px"
                  }}
                >
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.42)" }}>
                    0{index + 1}
                  </span>
                  <span style={{ marginTop: "8px", fontSize: "14px" }}>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    }
  );
}
