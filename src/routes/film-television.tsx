import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/film-television")({
  head: () => ({ meta: [
    { title: "Film & Television | Palacewall Media & Entertainment" },
    { name: "description", content: "Explore Palacewall’s film and television interests, original storytelling, and The Godfather of Benin City development project." },
    { property: "og:title", content: "Film & Television | Palacewall Media & Entertainment" },
    { property: "og:description", content: "Stories that inspire. Productions that connect across generations and borders." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FilmPage,
});

function FilmPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.film} /></PalacewallLayout>;
}