import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HouseSec — 15 Years Of Smart Home Security" },
      { name: "description", content: "Meet the certified HouseSec team — 15+ years installing alarms, CCTV and smart home automation for 8,000+ Southern California families." },
      { property: "og:title", content: "About HouseSec — Trusted Home Security Installers" },
      { property: "og:description", content: "Licensed, insured and family-first home security installation since 2010." },
    ],
  }),
  component: AboutPage,
});

function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container-x relative">
        <div className="flex items-center gap-2 text-cream text-xs font-semibold uppercase tracking-[0.25em]">
          <ShieldCheck className="h-4 w-4" /> {eyebrow}
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl">{title}</h1>
        <p className="mt-5 text-primary-foreground/80 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main>
      <TopBar />
      <Header />
      <PageHero
        eyebrow="About Us"
        title="Building Safer Homes For Over 15 Years"
        subtitle="HouseSec is a family-run security installer protecting Southern California homes with smart alarms, surveillance and full automation."
      />
      <About />
      <Stats />
      <WhyUs />
      <Testimonials />
      <Footer />
    </main>
  );
}

export { PageHero };
