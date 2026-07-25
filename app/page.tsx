import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaSection } from "@/components/sections/CtaSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { portfolioItems } from "@/data/portfolio";

export default function HomePage() {
  const previewItems = portfolioItems.slice(0, 3);

  return (
    <>
      <HomeHero />
      <PortfolioPreview items={previewItems} />
      <ServicesPreview />
      <ProjectsPreview />
      <AboutPreview />
      <CtaSection />
    </>
  );
}
