import { Check } from "lucide-react";

const tiers = [
  { name: "AIO Starter", price: 350, popular: false },
  { name: "AIO Standar", price: 650, popular: true },
  { name: "AIO Professional", price: 850, popular: false },
];

const features = [
  "Integration House Secure",
  "Online CCTV Security",
  "Smart Alarm System",
  "Smart Light & Fire",
  "And Many More Features",
];

export function Pricing() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Featured Package</span>
          <h2 className="mt-3 section-title">Lets Choose All In Package For House Security Installation</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const popular = t.popular;
            return (
              <div
                key={t.name}
                className={`rounded-2xl p-8 ring-1 transition-all ${popular ? "bg-primary text-primary-foreground ring-primary -translate-y-3" : "bg-card ring-border hover:-translate-y-1"}`}
                style={{ boxShadow: popular ? "var(--shadow-soft)" : "var(--shadow-card)" }}
              >
                <h3 className={`font-display text-xl font-bold ${popular ? "" : "text-foreground"}`}>{t.name}</h3>
                <p className={`mt-2 text-sm ${popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold">${t.price}</span>
                  <span className={popular ? "text-primary-foreground/80" : "text-muted-foreground"}>/ House</span>
                </div>
                <ul className="mt-7 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className={`h-4 w-4 ${popular ? "text-cream" : "text-primary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-8 inline-flex w-full justify-center rounded-md px-6 py-3 text-sm font-semibold transition ${popular ? "bg-cream text-primary hover:bg-white" : "bg-primary text-primary-foreground hover:bg-primary-dark"}`}>
                  Order Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
