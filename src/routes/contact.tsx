import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "./about";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HouseSec — Free Home Security Survey & Quote" },
      { name: "description", content: "Book a free in-home security survey or request a tailored quote. Call (+1) 619 555 0142 or send us a message — we reply within one business hour." },
      { property: "og:title", content: "Contact HouseSec" },
      { property: "og:description", content: "Get a free survey and tailored home security quote within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: Phone, title: "Call Us", value: "(+1) 619 555 0142", sub: "Mon–Sat, 7am–8pm PT" },
  { icon: Mail, title: "Email Us", value: "hello@housesec.com", sub: "Reply within 1 business hour" },
  { icon: MapPin, title: "Visit Us", value: "128 Market Street, Suite 4B", sub: "San Diego, CA 92101" },
  { icon: Clock, title: "Response Time", value: "Within 24 hours", sub: "Same-week installation available" },
];

function ContactPage() {
  return (
    <main>
      <TopBar />
      <Header />
      <PageHero
        eyebrow="Get In Touch"
        title="Tell Us About Your Home"
        subtitle="Share a few details and a security specialist will get back to you within one business hour with next steps and a free survey slot."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {info.map(({ icon: Icon, title, value, sub }) => (
              <div key={title} className="flex items-start gap-4 rounded-xl bg-card p-6 ring-1 ring-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <span className="grid place-items-center h-12 w-12 rounded-lg bg-accent text-primary shrink-0"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
                  <div className="font-display font-bold mt-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            className="lg:col-span-3 rounded-2xl bg-card p-8 ring-1 ring-border space-y-5"
            style={{ boxShadow: "var(--shadow-card)" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <span className="eyebrow">Request A Quote</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold">Send Us A Message</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { l: "Full Name", p: "Jane Doe", t: "text" },
                { l: "Email Address", p: "you@email.com", t: "email" },
                { l: "Phone Number", p: "(+1) 555 000 0000", t: "tel" },
                { l: "City / Zip", p: "San Diego, 92101", t: "text" },
              ].map((f) => (
                <div key={f.l} className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">{f.l}</label>
                  <input type={f.t} placeholder={f.p} className="w-full rounded-md bg-background border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">What can we help with?</label>
              <select className="w-full rounded-md bg-background border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option>Free home security survey</option>
                <option>Smart alarm installation</option>
                <option>CCTV / camera installation</option>
                <option>Keyless smart locks</option>
                <option>Full home automation</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Tell us about your home</label>
              <textarea rows={5} placeholder="Number of doors, floors, current system, anything you'd like us to know…" className="w-full rounded-md bg-background border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <button type="submit" className="btn-primary">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
