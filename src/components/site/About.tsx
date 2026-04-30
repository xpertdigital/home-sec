import aboutImg from "@/assets/about-alarm.jpg";
import { Check, Phone } from "lucide-react";

export function About() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Man arming a home alarm on the wall" loading="lazy" width={1024} height={1280} className="rounded-2xl w-full h-[520px] object-cover" />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 max-w-[260px] shadow-lg hidden md:block">
            <div className="font-display text-xl font-bold">15+ Years Protecting Homes</div>
            <p className="text-xs mt-2 text-primary-foreground/80">Trusted by more than 8,000 families across California.</p>
          </div>
        </div>
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-3 section-title">A Certified Team Building Safer, Smarter Homes</h2>
          <p className="mt-5 text-muted-foreground">HouseSec is a fully licensed home security installer specializing in smart alarms, surveillance and integrated automation. Every system is designed, installed and supported by our in-house technicians.</p>
          <p className="mt-4 text-muted-foreground">We pair enterprise-grade hardware with friendly, neighborhood-level service so you get protection that actually works the day you need it most.</p>

          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {["Family-First Security Plans", "Privacy Built Into Every Install", "Lifetime Hardware Warranty", "Same-Week Installation"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="grid place-items-center h-5 w-5 rounded-full bg-primary text-primary-foreground"><Check className="h-3 w-3" /></span>
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#" className="btn-primary">About Us</a>
            <a href="#" className="flex items-center gap-3">
              <span className="grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
              <span>
                <div className="text-xs text-muted-foreground">Call us anytime</div>
                <div className="font-semibold">(+1) 619 555 0142</div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
