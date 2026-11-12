import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { contactDetails, type ContentPage } from "@/lib/palacewall-content";

function renderContactLinks(copy: string) {
  return copy.split(/(info@palacewall\.com|\+1-416-886-0339)/g).map((part, index) => {
    if (part === contactDetails.email) {
      return <a key={index} href={`mailto:${contactDetails.email}`} className="underline underline-offset-4">{part}</a>;
    }
    if (part === contactDetails.phone) {
      return <a key={index} href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`} className="underline underline-offset-4">{part}</a>;
    }
    return part;
  });
}

export function PalacewallContentPage({ page }: { page: ContentPage }) {
  let itemNumber = 0;

  return (
    <article>
      <section className="pw-container pb-14 pt-14 md:pb-20 md:pt-24">
        <p className="pw-kicker">{page.kicker}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <h1 className="pw-display-sm max-w-4xl text-primary">{page.title}</h1>
          <p className="max-w-md text-lg leading-8 text-muted-foreground lg:justify-self-end">{page.subtitle}</p>
        </div>
      </section>

      <section className="pw-container pw-editorial-rule grid gap-10 py-12 md:grid-cols-[.34fr_1fr] md:gap-14 md:py-16">
        <div className="flex items-start gap-3">
          <span className="mt-2 size-2 shrink-0 bg-accent" aria-hidden="true" />
          <p className="pw-kicker">The Palacewall perspective</p>
        </div>
        <div className="max-w-3xl space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
          {page.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      {page.brandShowcase && (
        <section className="pw-container pw-editorial-rule py-14 md:py-20" aria-labelledby="brand-showcase-title">
          <div className="mb-8 grid gap-4 md:grid-cols-[.34fr_1fr] md:gap-14">
            <p className="pw-kicker">Palacewall portfolio</p>
            <h2 id="brand-showcase-title" className="font-display text-2xl font-medium text-primary md:text-3xl">Brands under Palacewall</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {page.brandShowcase.map((brand) => (
              <article key={brand.name} className="overflow-hidden border border-border bg-card">
                <div className="flex aspect-[4/3] items-center justify-center bg-muted p-5">
                  <img src={brand.image} alt={brand.imageAlt} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <div className="flex min-h-52 flex-col p-5">
                  {brand.brandMark && <img src={brand.brandMark} alt="Kayluvas" className="mb-4 h-8 max-w-40 object-contain object-left" loading="lazy" />}
                  <h3 className="font-display text-xl font-medium text-foreground">{brand.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{brand.tagline}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{brand.copy}</p>
                  <Button asChild variant="outline" size="sm" className="mt-5 w-fit gap-2">
                    <a href={brand.href} target="_blank" rel="noreferrer" aria-label={`Visit ${brand.website} (opens in a new tab)`}>
                      {brand.website}<ExternalLink aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {page.feature && (
        <section className="bg-primary text-primary-foreground">
          <div className="pw-container grid gap-7 py-12 md:grid-cols-[.34fr_1fr] md:gap-14 md:py-16">
            <p className="pw-kicker !text-sage">{page.feature.label}</p>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-medium leading-tight md:text-5xl">{page.feature.title}</h2>
              <p className="mt-5 whitespace-pre-line text-base leading-8 opacity-80">{renderContactLinks(page.feature.copy)}</p>
              {page.feature.note && <p className="mt-5 border-l border-accent pl-4 text-sm leading-6 opacity-70">{page.feature.note}</p>}
            </div>
          </div>
        </section>
      )}

      {page.sections.map((section, sectionIndex) => (
        <section key={section.heading} className={`pw-container py-14 md:py-20 ${sectionIndex > 0 ? "pw-editorial-rule" : ""}`}>
          <div className="grid gap-8 md:grid-cols-[.34fr_1fr] md:gap-14">
            <h2 className="font-display text-2xl font-medium text-primary md:text-3xl">{section.heading}</h2>
            <div className="grid gap-x-12 sm:grid-cols-2">
              {section.items.map((item) => {
                itemNumber += 1;
                return (
                  <div key={item.title} className="pw-index-item py-6">
                    <div className="flex items-start gap-4">
                      <span className="pw-number pt-1">{String(itemNumber).padStart(2, "0")}</span>
                      <div>
                        <h3 className="font-display text-lg font-medium leading-snug text-foreground">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {page.caution && (
        <aside className="pw-container pw-editorial-rule py-7">
          <p className="max-w-4xl text-sm leading-7 text-muted-foreground">{page.caution}</p>
        </aside>
      )}
      {page.closing && (
        <section className="pw-container pw-editorial-rule flex flex-col items-start gap-7 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <p className="max-w-3xl font-display text-2xl leading-snug text-primary md:text-3xl">{page.closing}</p>
          <Button asChild variant="outline" className="shrink-0 gap-2">
            <Link to="/contact">Start a conversation <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </section>
      )}
    </article>
  );
}