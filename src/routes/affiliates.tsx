import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/affiliates")({
  head: () => ({ meta: [
    { title: "Our Affiliates & Corporate Family | Palacewall" },
    { name: "description", content: "Meet the organizations and brand concepts associated with Palacewall Media & Entertainment Ltd." },
    { property: "og:title", content: "Our Affiliates & Corporate Family | Palacewall" },
    { property: "og:description", content: "Independent enterprises, shared interests, and a common vision." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AffiliatesPage,
});

function AffiliatesPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.affiliates} /></PalacewallLayout>;
}