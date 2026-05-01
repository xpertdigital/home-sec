import heroImg from "@/assets/hero-security.jpg";
import { ArrowRight, Check } from "lucide-react";

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-primary-foreground">{label}</span>
        <span className="text-primary-foreground/80">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/15 overflow-hidden">
        <div className="h-full rounded-full bg-cream" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="Person using a smart home security app on phone" className="absolute inset-0 h-full w-full object-cover" width={1536} height={1024} fetchPriority="high" decoding="async" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="container-x relative grid lg:grid-cols-2 gap-12 py-20 lg:py-28 text-primary-foreground">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cream">House Secure Installation</span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Smarter Home Security For The People You Love
          </h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/85 max-w-xl">
            From smart alarms and 24/7 CCTV monitoring to keyless entry and full home automation, our certified technicians design and install security systems built around your home and family.
          </p>

          <div className="mt-10 max-w-md space-y-6">
            <ProgressBar label="Security System" value={43} />
            <ProgressBar label="New Technology System" value={45} />
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-md">
            {["Certified Installers", "Licensed & Insured", "24/7 Monitoring", "Lifetime Support"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-cream" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote form card */}
        <div className="lg:justify-self-end w-full max-w-md bg-primary-dark/80 backdrop-blur-sm rounded-xl p-7 ring-1 ring-white/10">
          <h3 className="font-display text-2xl font-bold">Get a Free Quote</h3>
          <p className="text-sm text-primary-foreground/75 mt-2">Tell us about your home and we'll send a tailored quote within 24 hours.</p>
          <form className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: "Your Name", placeholder: "Fullname" },
              { label: "Choose State", placeholder: "Branch Location" },
              { label: "Your Address", placeholder: "Full Address" },
              { label: "Select Service", placeholder: "Choose One" },
              { label: "Email Address", placeholder: "Your Email" },
              { label: "Date Of Booking", placeholder: "Monday - Friday" },
            ].map((f) => (
              <div key={f.label} className="space-y-1.5">
                <label className="text-xs font-medium text-primary-foreground/80">{f.label}</label>
                <input
                  placeholder={f.placeholder}
                  className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-cream/40"
                />
              </div>
            ))}
            <button type="button" className="col-span-2 mt-2 btn-cream w-fit">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
