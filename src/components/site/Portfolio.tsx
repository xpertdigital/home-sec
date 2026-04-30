import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: p1, title: "House Smart Alarm Door Lock & Keyless" },
  { img: p2, title: "Smart House IOT Integration Service" },
  { img: p3, title: "Keyless All Door Installation Service" },
];

export function Portfolio() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Recent Installations</span>
            <h2 className="mt-3 section-title">Real Homes, Real Security Outcomes</h2>
          </div>
          <a href="/gallery" className="btn-outline">View Full Gallery</a>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <a key={it.title} href="#" className="group relative rounded-2xl overflow-hidden block">
              <img src={it.img} alt={it.title} loading="lazy" width={1024} height={1280} className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold">{it.title}</h3>
                    <p className="text-sm text-primary-foreground/80 mt-1">Completed in San Diego, 2025</p>
                  </div>
                  <span className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-cream text-primary group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
