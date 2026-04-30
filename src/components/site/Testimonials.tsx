import phoneImg from "@/assets/pricing-phone.jpg";
import avatar from "@/assets/avatar-1.jpg";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Jonathan Pierce", role: "Homeowner, La Jolla", text: "The HouseSec crew installed our cameras, alarm and smart locks in a single afternoon. Everything works perfectly through one app and the team walked us through every detail." },
  { name: "Sarah Kowalski", role: "Homeowner, Carlsbad", text: "Quote was honest, the install was clean, and they followed up a week later to make sure the system was tuned. Best experience I've had with a contractor in years." },
  { name: "Mike Tanaka", role: "Homeowner, Coronado", text: "I had three quotes — HouseSec was the only one who actually walked the property, asked smart questions and recommended only what we needed. Highly recommend." },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container-x grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 relative">
          <img src={phoneImg} alt="Smartphone with security app" loading="lazy" width={1024} height={1280} className="rounded-2xl w-full h-[420px] object-cover" />
          <div className="absolute -bottom-6 left-6 right-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-lg">
            <div className="flex items-center gap-1 text-cream">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <div className="mt-2 font-display font-bold">5-Star Reviews On Google</div>
            <div className="text-xs text-primary-foreground/80">Rated 4.9/5 across 600+ verified customers</div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="eyebrow">Client Stories</span>
          <h2 className="mt-3 section-title">Trusted By Families Across Southern California</h2>

          <div className="mt-10 space-y-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-6 ring-1 ring-border flex gap-5 items-start" style={{ boxShadow: "var(--shadow-card)" }}>
                <img src={avatar} alt={t.name} loading="lazy" width={64} height={64} className="h-16 w-16 rounded-full object-cover shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">"{t.text}"</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
