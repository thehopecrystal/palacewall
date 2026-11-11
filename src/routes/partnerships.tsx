import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/partnerships")({
  head: () => ({ meta: [
    { title: "International Partnerships | Palacewall Media & Entertainment" },
    { name: "description", content: "Explore partnership opportunities connecting Canada, Nigeria, and international markets across media, sports, products, and brands." },
    { property: "og:title", content: "International Partnerships | Palacewall Media & Entertainment" },
    { property: "og:description", content: "Building bridges between markets through strategic international business development." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PartnershipsPage,
});

function PartnershipsPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.partnerships} /></PalacewallLayout>;
}