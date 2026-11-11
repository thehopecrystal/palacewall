import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/consumer-brands")({
  head: () => ({ meta: [
    { title: "Consumer Brands | Palacewall Media & Entertainment" },
    { name: "description", content: "Discover Palacewall’s proposed consumer brand concepts and product development interests." },
    { property: "og:title", content: "Consumer Brands | Palacewall Media & Entertainment" },
    { property: "og:description", content: "Distinctive brand concepts across home technology, personal care, and premium beverages." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BrandsPage,
});

function BrandsPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.brands} /></PalacewallLayout>;
}