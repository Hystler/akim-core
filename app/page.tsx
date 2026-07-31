import { AboutPreview } from "@/components/sections/AboutPreview";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { portfolioItems } from "@/data/portfolio";
import { siteUrl } from "@/lib/site-config";

export default function HomePage() {
  const previewItems = portfolioItems.filter((item) => item.featured).slice(0, 6);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Аким Коваленко",
        url: siteUrl,
        jobTitle: "Дизайнер презентаций и digital-продуктов",
        sameAs: ["https://t.me/loot_digger"]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "AKIM CORE",
        url: siteUrl,
        description:
          "Презентации, коммерческие предложения, лендинги и B2B digital-продукты для бизнеса.",
        founder: { "@id": `${siteUrl}/#person` },
        serviceType: [
          "Дизайн презентаций",
          "Коммерческие предложения",
          "Лендинги",
          "B2B SaaS и автоматизации"
        ],
        areaServed: "Удалённо"
      }
    ]
  };

  return (
    <>
      <JsonLd data={schema} />
      <HomeHero />
      <TrustStrip />
      <PortfolioPreview items={previewItems} />
      <ServicesPreview />
      <ProcessSection />
      <BenefitsSection />
      <AboutPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
