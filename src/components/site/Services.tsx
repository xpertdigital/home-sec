import { ShieldCheck, KeyRound, Cctv, BellRing, ArrowRight } from "lucide-react";

const services = [
  { icon: ShieldCheck, title: "Smart Home Security Integration", desc: "Unify alarms, cameras and locks into one easy-to-use app you can control from anywhere." },
  { icon: KeyRound, title: "Keyless Smart Door Locks", desc: "Replace fragile keys with PIN, fingerprint and phone unlock for every door in your home." },
  { icon: Cctv, title: "HD CCTV With Cloud Recording", desc: "4K cameras with night vision, motion alerts and 30-day encrypted cloud storage." },
  { icon: BellRing, title: "24/7 Monitored Alarm Systems", desc: "Wireless sensors backed by a real monitoring team that calls the moment something happens." },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">What We Can Do</span>
          <h2 className="mt-3 section-title">Complete Home Security Installation Services</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#"
              className="group relative rounded-xl bg-card p-7 ring-1 ring-border hover:ring-primary transition-all hover:-translate-y-1 overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid place-items-center h-14 w-14 rounded-lg bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read More <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
