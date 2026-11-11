import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/broadcasting-digital-media")({
  head: () => ({ meta: [
    { title: "Broadcasting & Digital Media | Palacewall" },
    { name: "description", content: "Explore Palacewall’s online radio, podcasts, digital video, interviews, and cultural programming interests." },
    { property: "og:title", content: "Broadcasting & Digital Media | Palacewall" },
    { property: "og:description", content: "Informing, entertaining, and connecting audiences through digital media." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BroadcastingPage,
});

function BroadcastingPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.media} /></PalacewallLayout>;
}