import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import { ArrowRight } from "lucide-react";

const featured = [
  { img: b1, day: 31, month: "May", title: "Smart Installation Finger House" },
  { img: b2, day: 31, month: "May", title: "House Smart Recognition" },
];

const recent = [
  { img: b3, date: "May 31, 2022", title: "Tips Security House System" },
  { img: b1, date: "May 31, 2022", title: "Smart House Install Flow" },
  { img: b2, date: "May 31, 2022", title: "Minimize The Fire House" },
];

export function Blog() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Blog Post</span>
          <h2 className="mt-3 section-title">Read Our Tips & Trick For Secure Your Own House</h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {featured.map((p) => (
            <article key={p.title} className="rounded-2xl overflow-hidden bg-card ring-1 ring-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="relative">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={683} className="h-64 w-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-lg px-3 py-2 text-center">
                  <div className="font-display text-xl font-bold leading-none">{p.day}</div>
                  <div className="text-xs">{p.month}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {recent.map((p) => (
            <article key={p.title} className="flex gap-4 items-center bg-card rounded-xl p-3 ring-1 ring-border">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={683} className="h-24 w-28 object-cover rounded-lg shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">{p.date}</div>
                <h4 className="font-display font-bold mt-1 text-sm leading-snug">{p.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
