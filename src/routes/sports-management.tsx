import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/sports-management")({
  head: () => ({ meta: [
    { title: "Sports Management | Palacewall Media & Entertainment" },
    { name: "description", content: "Discover Palacewall’s interests in athlete development, sports partnerships, sponsorship, and football." },
    { property: "og:title", content: "Sports Management | Palacewall Media & Entertainment" },
    { property: "og:description", content: "Developing talent and exploring opportunities across global sports." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SportsPage,
});

function SportsPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.sports} /></PalacewallLayout>;
}