import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBar } from "@/components/site/CtaBar";
import { PageHero } from "./about";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Recent Home Security Installations | HouseSec" },
      { name: "description", content: "Browse real HouseSec installations: smart alarms, CCTV systems, keyless entry and full home automation across San Diego County." },
      { property: "og:title", content: "Project Gallery | HouseSec" },
      { property: "og:description", content: "See real installations completed by the HouseSec team." },
    ],
  }),
  component: GalleryPage,
});

const projects = [
  { img: p1, title: "Keyless Front & Garage Entry", location: "La Jolla, CA" },
  { img: p2, title: "Whole-Home Smart Integration", location: "Carlsbad, CA" },
  { img: p3, title: "Multi-Door Keyless Upgrade", location: "Coronado, CA" },
  { img: b1, title: "Fingerprint Lock Installation", location: "Encinitas, CA" },
  { img: b2, title: "AI Doorbell & Facial Recognition", location: "Del Mar, CA" },
  { img: b3, title: "24/7 Monitored Alarm System", location: "Chula Vista, CA" },
];

function GalleryPage() {
  return (
    <main>
      <TopBar />
      <Header />
      <PageHero
        eyebrow="Gallery"
        title="A Look At Our Recent Installations"
        subtitle="Every project is custom-designed for the home it protects. Here's a snapshot of recent work across Southern California."
      />
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((it) => (
              <div key={it.title} className="group relative rounded-2xl overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" width={1024} height={1280} className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold">{it.title}</h3>
                      <p className="text-sm text-primary-foreground/80 mt-1">{it.location}</p>
                    </div>
                    <span className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-cream text-primary group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBar />
      <Footer />
    </main>
  );
}
