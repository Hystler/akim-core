import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactBlocks } from "@/components/sections/ContactBlocks";
import { EditorialApproach } from "@/components/sections/EditorialApproach";
import { FaqSection } from "@/components/sections/FaqSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { publishedPortfolioItems } from "@/data/portfolio";
import { siteUrl } from "@/lib/site-config";

export default function HomePage() {
  const previewItems = publishedPortfolioItems.filter((item) => item.featured).slice(0, 4);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Аким Коваленко",
        url: siteUrl,
        jobTitle: "Дизайнер презентаций",
        sameAs: ["https://t.me/loot_digger"]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "AKIM CORE",
        url: siteUrl,
        description: "Презентации для бизнеса. Структура, текст и дизайн под ключ.",
        founder: { "@id": `${siteUrl}/#person` },
        serviceType: [
          "Дизайн презентаций",
          "Коммерческие предложения",
          "Сайты",
          "Рабочие инструменты"
        ],
        areaServed: "Удалённо"
      }
    ]
  };

  return (
    <>
      <JsonLd data={schema} />
      <HomeHero />
      <PortfolioPreview items={previewItems} />
      <EditorialApproach />
      <ServicesPreview />
      <ProcessSection />
      <AboutPreview />
      <FaqSection limit={4} />
      <ContactBlocks />
    </>
  );
}
