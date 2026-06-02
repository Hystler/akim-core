import { existsSync } from "node:fs";
import { join } from "node:path";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaSection } from "@/components/sections/CtaSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { portfolioItems } from "@/data/portfolio";

function publicFileExists(path: string) {
  return existsSync(join(process.cwd(), "public", path.replace(/^\//, "")));
}

export default function HomePage() {
  const hasProfileImage = existsSync(join(process.cwd(), "public", "images", "profile.jpg"));
  const previewItems = portfolioItems.slice(0, 3).map((item) => ({
    ...item,
    coverAvailable: publicFileExists(item.cover),
    fileAvailable: item.file ? publicFileExists(item.file) : false
  }));

  return (
    <>
      <HomeHero hasProfileImage={hasProfileImage} />
      <ServicesPreview />
      <ProjectsPreview />
      <PortfolioPreview items={previewItems} />
      <AboutPreview />
      <CtaSection />
    </>
  );
}
