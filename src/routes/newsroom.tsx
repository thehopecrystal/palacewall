import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/newsroom")({
  head: () => ({ meta: [
    { title: "Newsroom | Palacewall Media & Entertainment" },
    { name: "description", content: "Corporate announcements, production updates, partnership developments, and news from Palacewall." },
    { property: "og:title", content: "Newsroom | Palacewall Media & Entertainment" },
    { property: "og:description", content: "Our stories, projects, and progress across Canada and Nigeria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: NewsroomPage,
});

function NewsroomPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.newsroom} /></PalacewallLayout>;
}