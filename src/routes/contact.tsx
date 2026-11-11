import { createFileRoute } from "@tanstack/react-router";
import { PalacewallContentPage } from "@/components/palacewall-content-page";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { contentPages } from "@/lib/palacewall-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Palacewall | Business & Partnership Inquiries" },
    { name: "description", content: "Find Palacewall Media & Entertainment inquiry categories and operations in Canada and Nigeria." },
    { property: "og:title", content: "Contact Palacewall | Business & Partnership Inquiries" },
    { property: "og:description", content: "Connect with Palacewall about creative, sports, consumer brand, and international business opportunities." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return <PalacewallLayout><PalacewallContentPage page={contentPages.contact} /></PalacewallLayout>;
}