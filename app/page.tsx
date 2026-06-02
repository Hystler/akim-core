import { existsSync } from "node:fs";
import { join } from "node:path";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaSection } from "@/components/sections/CtaSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export default function HomePage() {
  const hasProfileImage = existsSync(join(process.cwd(), "public", "images", "profile.jpg"));

  return (
    <>
      <HomeHero hasProfileImage={hasProfileImage} />
      <ServicesPreview />
      <ProjectsPreview />
      <PortfolioPreview />
      <AboutPreview />
      <CtaSection />
    </>
  );
}
