import { useId } from "react";

export type ACoreLogoVariant = "navbar" | "hero" | "icon";

type ACoreLogoProps = {
  size?: number;
  animated?: boolean;
  variant?: ACoreLogoVariant;
  className?: string;
};

type Particle = {
  angle: number;
  color: "cyan" | "blue" | "violet" | "white";
  depth: "back" | "front";
  opacity: number;
  radius: number;
};

type OrbitConfig = {
  angle: number;
  backOpacity: number;
  frontDash: string;
  frontOffset: number;
  frontOpacity: number;
  rx: number;
  ry: number;
  width: number;
  particles: Particle[];
};

const variantDefaults: Record<ACoreLogoVariant, number> = {
  navbar: 48,
  hero: 300,
  icon: 64
};

const variantOrbitCount: Record<ACoreLogoVariant, number> = {
  navbar: 3,
  hero: 4,
  icon: 2
};

const particleColors: Record<Particle["color"], string> = {
  cyan: "#22D3EE",
  blue: "#3B82F6",
  violet: "#8B5CF6",
  white: "#F8FAFC"
};

const orbitConfigs: OrbitConfig[] = [
  {
    angle: -18,
    backOpacity: 0.36,
    frontDash: "19 81",
    frontOffset: 2,
    frontOpacity: 0.9,
    rx: 55,
    ry: 17.5,
    width: 1.65,
    particles: [
      { angle: 8, color: "cyan", depth: "front", opacity: 1, radius: 3.15 },
      { angle: 186, color: "blue", depth: "back", opacity: 0.45, radius: 1.45 }
    ]
  },
  {
    angle: 31,
    backOpacity: 0.3,
    frontDash: "16 84",
    frontOffset: -40,
    frontOpacity: 0.76,
    rx: 53.5,
    ry: 15.8,
    width: 1.45,
    particles: [
      { angle: 118, color: "violet", depth: "back", opacity: 0.48, radius: 1.55 },
      { angle: 307, color: "blue", depth: "front", opacity: 0.9, radius: 2.25 }
    ]
  },
  {
    angle: 78,
    backOpacity: 0.24,
    frontDash: "13 87",
    frontOffset: -24,
    frontOpacity: 0.7,
    rx: 49,
    ry: 13.4,
    width: 1.2,
    particles: [
      { angle: 42, color: "white", depth: "front", opacity: 0.92, radius: 1.75 },
      { angle: 232, color: "violet", depth: "back", opacity: 0.42, radius: 1.2 }
    ]
  },
  {
    angle: -58,
    backOpacity: 0.2,
    frontDash: "10 90",
    frontOffset: -66,
    frontOpacity: 0.58,
    rx: 47,
    ry: 12.5,
    width: 1.05,
    particles: [
      { angle: 278, color: "cyan", depth: "front", opacity: 0.82, radius: 1.7 },
      { angle: 96, color: "violet", depth: "back", opacity: 0.34, radius: 1.05 }
    ]
  }
];

const aOuterPath = "M24 108L55.8 18H72.2L104 108H83.5L76.8 90.6H51.2L44.6 108H24Z";
const aInnerPath = "M58.6 74.2H69.8L64.1 52.4L58.6 74.2Z";
const aInsetPath = "M36.4 104.5L64 24.4L91.6 104.5";
const aCrossbarPath = "M48.5 84.9H79.5";

function pointOnEllipse(rx: number, ry: number, angle: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: 64 + rx * Math.cos(radians),
    y: 64 + ry * Math.sin(radians)
  };
}

function ParticleDot({
  id,
  orbit,
  particle,
  scale
}: {
  id: string;
  orbit: OrbitConfig;
  particle: Particle;
  scale: number;
}) {
  const point = pointOnEllipse(orbit.rx, orbit.ry, particle.angle);
  const glowId = particle.depth === "front" ? `${id}-particle-front` : `${id}-particle-back`;

  return (
    <g opacity={particle.opacity}>
      <circle
        cx={point.x}
        cy={point.y}
        r={particle.radius * scale * 2.4}
        fill={particleColors[particle.color]}
        opacity={particle.depth === "front" ? 0.16 : 0.08}
      />
      <circle
        cx={point.x}
        cy={point.y}
        r={particle.radius * scale}
        fill={particleColors[particle.color]}
        filter={`url(#${glowId})`}
      />
      <circle
        cx={point.x - particle.radius * 0.25}
        cy={point.y - particle.radius * 0.25}
        r={Math.max(0.45, particle.radius * scale * 0.34)}
        fill="#F8FAFC"
        opacity={particle.depth === "front" ? 0.9 : 0.45}
      />
    </g>
  );
}

export function ACoreLogo({ size, variant = "navbar", className }: ACoreLogoProps) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  const resolvedSize = size ?? variantDefaults[variant];
  const isHero = variant === "hero";
  const isIcon = variant === "icon";
  const orbitSet = orbitConfigs.slice(0, variantOrbitCount[variant]);
  const particleScale = isHero ? 1.18 : isIcon ? 0.86 : 1.04;
  const backStrokeBoost = isHero ? 0.2 : isIcon ? 0 : 0.35;
  const frontStrokeBoost = isHero ? 0.25 : isIcon ? 0 : 0.45;

  return (
    <span
      aria-hidden="true"
      className={["block shrink-0", className].filter(Boolean).join(" ")}
      style={{ height: resolvedSize, width: resolvedSize }}
    >
      <svg
        width={resolvedSize}
        height={resolvedSize}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <radialGradient id={`${id}-core-glow`} cx="50%" cy="50%" r="57%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.28" />
            <stop offset="40%" stopColor="#2563EB" stopOpacity="0.22" />
            <stop offset="72%" stopColor="#7C3AED" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#080A0F" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-a-fill`} x1="36" y1="22" x2="91" y2="106">
            <stop offset="0%" stopColor="#ECFEFF" />
            <stop offset="25%" stopColor="#67E8F9" />
            <stop offset="54%" stopColor="#0098FF" />
            <stop offset="78%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id={`${id}-a-edge`} x1="29" y1="19" x2="97" y2="111">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="42%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
          <linearGradient id={`${id}-orbit-back`} x1="10" y1="40" x2="118" y2="94">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="52%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id={`${id}-orbit-front`} x1="13" y1="80" x2="116" y2="43">
            <stop offset="0%" stopColor="#ECFEFF" />
            <stop offset="30%" stopColor="#22D3EE" />
            <stop offset="63%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
          <filter id={`${id}-a-soft-glow`} x="-28%" y="-28%" width="156%" height="156%">
            <feGaussianBlur stdDeviation={isHero ? "2" : "1.45"} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${id}-orbit-soft-glow`} x="-28%" y="-70%" width="156%" height="240%">
            <feGaussianBlur stdDeviation={isHero ? "1.15" : "0.85"} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${id}-particle-front`} x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="1.35" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${id}-particle-back`} x="-130%" y="-130%" width="360%" height="360%">
            <feGaussianBlur stdDeviation="0.85" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <mask id={`${id}-behind-a`}>
            <rect width="128" height="128" fill="white" />
            <path d={aOuterPath} fill="black" stroke="black" strokeWidth="7" />
          </mask>
          <mask id={`${id}-front-orbits`}>
            <rect width="128" height="128" fill="black" />
            <path d="M7 60C31 76 43 89 64 91C86 93 103 78 122 54V114H7V60Z" fill="white" />
            <path d="M8 33C31 20 56 27 77 42C91 52 105 49 120 37V8H8V33Z" fill="white" opacity="0.55" />
          </mask>
        </defs>

        <circle cx="64" cy="64" r={isHero ? 42 : 36} fill={`url(#${id}-core-glow)`} />

        <g mask={`url(#${id}-behind-a)`}>
          {orbitSet.map((orbit) => (
            <g key={`back-${orbit.angle}`} transform={`rotate(${orbit.angle} 64 64)`}>
              <ellipse
                cx="64"
                cy="64"
                rx={orbit.rx}
                ry={orbit.ry}
                fill="none"
                stroke={`url(#${id}-orbit-back)`}
                strokeWidth={orbit.width + backStrokeBoost}
                strokeLinecap="round"
                opacity={orbit.backOpacity}
              />
              {!isIcon ? (
                <ellipse
                  cx="64"
                  cy="64"
                  rx={orbit.rx - 4.3}
                  ry={Math.max(8, orbit.ry - 1.15)}
                  fill="none"
                  stroke={`url(#${id}-orbit-back)`}
                  strokeWidth="0.55"
                  strokeDasharray="1.3 8"
                  opacity={variant === "navbar" ? 0.2 : 0.14}
                />
              ) : null}
              {orbit.particles
                .filter((particle) => particle.depth === "back")
                .map((particle) => (
                  <ParticleDot
                    key={`back-${orbit.angle}-${particle.angle}`}
                    id={id}
                    orbit={orbit}
                    particle={particle}
                    scale={particleScale}
                  />
                ))}
            </g>
          ))}
        </g>

        <g filter={`url(#${id}-a-soft-glow)`}>
          <path d={aOuterPath} fill="#07111E" opacity="0.92" stroke="#22D3EE" strokeOpacity="0.12" strokeWidth="6" />
          <path d={aOuterPath} fill={`url(#${id}-a-fill)`} />
          <path d={aOuterPath} fill="none" stroke={`url(#${id}-a-edge)`} strokeOpacity="0.82" strokeWidth="1.65" />
          <path d={aInnerPath} fill="#07111E" fillOpacity="0.98" />
          <path d={aInsetPath} stroke="#ECFEFF" strokeOpacity="0.34" strokeWidth="1.45" strokeLinejoin="round" />
          <path d={aCrossbarPath} stroke="#ECFEFF" strokeOpacity="0.84" strokeWidth={isHero ? 3.2 : 2.8} strokeLinecap="round" />
          <path d="M48.8 88.8H79.2" stroke="#7DD3FC" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g mask={`url(#${id}-front-orbits)`}>
          {orbitSet.map((orbit) => (
            <g key={`front-${orbit.angle}`} transform={`rotate(${orbit.angle} 64 64)`}>
              <ellipse
                cx="64"
                cy="64"
                rx={orbit.rx}
                ry={orbit.ry}
                fill="none"
                pathLength="100"
                stroke={`url(#${id}-orbit-front)`}
                strokeDasharray={isIcon ? "15 85" : orbit.frontDash}
                strokeDashoffset={orbit.frontOffset}
                strokeWidth={orbit.width + frontStrokeBoost}
                strokeLinecap="round"
                opacity={orbit.frontOpacity}
                filter={`url(#${id}-orbit-soft-glow)`}
              />
            </g>
          ))}
        </g>

        {!isIcon
          ? orbitSet.map((orbit) => (
              <g key={`front-particle-${orbit.angle}`} transform={`rotate(${orbit.angle} 64 64)`}>
                {orbit.particles
                  .filter((particle) => particle.depth === "front")
                  .map((particle) => (
                    <ParticleDot
                      key={`front-${orbit.angle}-${particle.angle}`}
                      id={id}
                      orbit={orbit}
                      particle={particle}
                      scale={particleScale}
                    />
                  ))}
              </g>
            ))
          : null}
      </svg>
    </span>
  );
}
