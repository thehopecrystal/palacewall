import { ArrowDown, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PalacewallLayout } from "@/components/palacewall-layout";
import { Button } from "@/components/ui/button";
import { businessInterests } from "@/lib/palacewall-content";
import filmProductionImage from "@/assets/palacewall-film-production.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palacewall Media & Entertainment Ltd. | Connecting Continents" },
      { name: "description", content: "Discover Palacewall Media & Entertainment Ltd., connecting Canada, Nigeria, and international markets through film, sports, digital media, consumer brands, and partnerships." },
      { property: "og:title", content: "Palacewall Media & Entertainment Ltd. | Connecting Continents" },
      { property: "og:description", content: "Connecting continents. Creating opportunities. Building legacies across Canada, Nigeria, and international markets." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PalacewallLayout>
      <section className="pw-container pb-12 pt-14 md:pb-16 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-[1.25fr_.75fr] md:gap-16">
          <div>
            <p className="pw-kicker">Canada <span aria-hidden="true">/</span> Nigeria <span aria-hidden="true">/</span> International markets</p>
            <h1 className="pw-display mt-7 max-w-4xl text-primary">Connecting<br />continents<span className="text-accent">.</span><br />Creating opportunity.</h1>
          </div>
          <div className="max-w-lg pb-1 md:justify-self-end">
            <p className="text-lg leading-8 text-muted-foreground">A diversified international enterprise bringing media, sports, consumer brands, and business opportunities into conversation across borders.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button asChild className="gap-2"><Link to="/about">Discover Palacewall <ArrowRight aria-hidden="true" /></Link></Button>
              <Link to="/partnerships" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore partnerships <ArrowDown className="size-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pw-container" aria-label="Film production in Nigeria">
        <img className="pw-hero-image" src={filmProductionImage} width={1600} height={1120} alt="A Nigerian film crew shooting a period story in a courtyard in Benin City" fetchPriority="high" />
        <div className="flex flex-col gap-2 border-b border-border py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Stories rooted in place. Shared with the world.</span>
          <span>Palacewall Film & Television</span>
        </div>
      </section>

      <section className="pw-container grid gap-8 py-16 md:grid-cols-[.34fr_1fr] md:gap-14 md:py-24">
        <div className="flex items-start gap-3">
          <span className="mt-2 size-2 bg-accent" aria-hidden="true" />
          <p className="pw-kicker">Who we are</p>
        </div>
        <div className="grid gap-8 md:grid-cols-[1fr_.7fr] md:gap-14">
          <h2 className="font-display text-3xl font-medium leading-tight text-primary md:text-5xl">One corporate vision. Multiple business interests.</h2>
          <div>
            <p className="text-base leading-8 text-muted-foreground">Palacewall brings together diverse business activities under a shared corporate identity and strategic direction. Our separately incorporated entities in Canada and Nigeria provide a foundation to explore opportunities across North America, Africa, and international markets.</p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">About Palacewall <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="pw-container py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-[.34fr_1fr] md:gap-14">
            <p className="pw-kicker">Where we work</p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-display text-3xl font-medium text-primary">Canada</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Creative projects, commercial initiatives, business relationships, and partnerships in Canada and internationally.</p>
              </div>
              <div className="border-t border-border pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <p className="font-display text-3xl font-medium text-primary">Nigeria</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Creative ventures, consumer brands, and business opportunities in Nigeria and the wider African market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pw-container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-[.34fr_1fr] md:gap-14">
          <div>
            <p className="pw-kicker">Our interests</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">A growing portfolio of creative, commercial, and community-focused activity.</p>
          </div>
          <div>
            <h2 className="mb-8 max-w-3xl font-display text-3xl font-medium leading-tight text-primary md:text-5xl">A platform for ideas with room to travel.</h2>
            <div className="grid gap-x-12 sm:grid-cols-2">
              {businessInterests.map((interest) => (
                <Link key={interest.number} to={interest.to} className="pw-index-item group py-6">
                  <div className="flex items-start gap-4">
                    <span className="pw-number pt-1">{interest.number}</span>
                    <div>
                      <span className="flex items-center justify-between gap-3 font-display text-lg font-medium leading-snug text-foreground">
                        {interest.title}<ArrowRight className="size-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      </span>
                      <span className="mt-3 block text-sm leading-7 text-muted-foreground">{interest.copy}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="pw-container grid gap-8 py-14 md:grid-cols-[.34fr_1fr] md:gap-14 md:py-20">
          <p className="pw-kicker !text-sage">Featured project</p>
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[.12em] opacity-65">Film development</p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-5xl">The Godfather of Benin City</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 opacity-75">An original Palacewall film development project exploring power, family, heritage, loyalty, and influence within the cultural and historical environment of Benin City, Nigeria.</p>
            </div>
            <Button asChild variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/film-television">Explore film & TV <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pw-container grid gap-8 py-16 md:grid-cols-[.34fr_1fr] md:gap-14 md:py-24">
        <p className="pw-kicker">Our corporate family</p>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight text-primary md:text-5xl">Independent ventures. Shared values.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">Human Angle Initiatives, Edofaces, Kay Luvas, Casa Jade Reserva, and Palacewall Home Technology reflect a varied network of organizations and brand concepts.</p>
          </div>
          <Button asChild variant="outline" className="gap-2"><Link to="/affiliates">Meet the family <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>

      <section className="pw-container pw-editorial-rule grid gap-8 py-12 md:grid-cols-[.34fr_1fr] md:gap-14 md:py-16">
        <p className="pw-kicker">Our commitment</p>
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-3xl font-display text-2xl leading-snug text-primary md:text-3xl">Responsible entrepreneurship, professional excellence, cultural diversity, and sustainable opportunity.</p>
          <Button asChild className="gap-2"><Link to="/contact">Let’s connect <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </PalacewallLayout>
  );
}