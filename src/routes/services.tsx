import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Services } from "@/components/site/Services";
import { Steps } from "@/components/site/Steps";
import { CtaBar } from "@/components/site/CtaBar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "./about";
import { ShieldCheck, Cctv, KeyRound, BellRing, Flame, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Security Services — Alarms, CCTV & Smart Locks | HouseSec" },
      { name: "description", content: "Professional installation of smart alarms, 4K CCTV, keyless locks, fire detection and full home automation. Free home survey included." },
      { property: "og:title", content: "Home Security Services | HouseSec" },
      { property: "og:description", content: "Smart alarms, CCTV, keyless entry and full home automation, professionally installed." },
    ],
  }),
  component: ServicesPage,
});

const fullServices = [
  { icon: ShieldCheck, title: "Smart Home Security Integration", desc: "Connect every alarm, camera and lock into a single dashboard you control from your phone." },
  { icon: Cctv, title: "4K CCTV With Cloud Recording", desc: "Color night vision, AI motion alerts and 30-day encrypted cloud storage as standard." },
  { icon: KeyRound, title: "Keyless Smart Door Locks", desc: "Unlock with a PIN, fingerprint or your phone — and grant temporary access to guests." },
  { icon: BellRing, title: "24/7 Monitored Alarms", desc: "Wireless sensors backed by a real monitoring center that calls you and dispatches help." },
  { icon: Flame, title: "Smart Fire & CO Detection", desc: "Connected smoke, heat and carbon monoxide sensors that alert you the moment they trigger." },
  { icon: Lightbulb, title: "Smart Lighting Automation", desc: "Schedules, presence simulation and motion-activated lighting for safer comings and goings." },
];

function ServicesPage() {
  return (
    <main>
      <TopBar />
      <Header />
      <PageHero
        eyebrow="Our Services"
        title="Complete Home Security, Designed Around Your Home"
        subtitle="From a single doorbell camera to a fully integrated smart home, our certified team handles design, installation and lifetime support."
      />
      <Services />
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">All Services</span>
            <h2 className="mt-3 section-title">Everything We Install Under One Roof</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullServices.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-card p-7 ring-1 ring-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="grid place-items-center h-14 w-14 rounded-lg bg-accent text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Steps />
      <CtaBar />
      <Footer />
    </main>
  );
}
