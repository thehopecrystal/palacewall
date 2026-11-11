import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Palacewall | Vision Beyond Borders" },
    { name: "description", content: "Learn about Palacewall’s vision, mission, values, and business presence in Canada and Nigeria." },
    { property: "og:title", content: "About Palacewall | Vision Beyond Borders" },
    { property: "og:description", content: "A diversified enterprise connecting creative and commercial opportunities across Canada and Nigeria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.about} /></PalacewallLayout>;
}