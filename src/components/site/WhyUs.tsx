import { CalendarCheck, Wrench, Award, LifeBuoy, Phone, Play } from "lucide-react";

const items = [
  { icon: CalendarCheck, title: "Easy Online Appointment & Booking Service" },
  { icon: Wrench, title: "All In One Tools Ready For Your House Installation" },
  { icon: Award, title: "Professionals With Cerficitation Team Working" },
  { icon: LifeBuoy, title: "Great Maintanence For After Service Record" },
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container-x relative grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cream">Why Choice Us</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">We Give The Great Offer Pricing With Our Professionals Team Certification</h2>
          <p className="mt-5 text-primary-foreground/80 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="shrink-0 grid place-items-center h-12 w-12 rounded-lg bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-6 w-6 text-cream" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{title}</h3>
                  <p className="text-sm text-primary-foreground/70 mt-1">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#" className="btn-cream">Our Pricing</a>
            <a href="#" className="flex items-center gap-3 text-primary-foreground">
              <span className="grid place-items-center h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20"><Phone className="h-5 w-5" /></span>
              <span>
                <div className="text-xs text-primary-foreground/70">Call us anytime</div>
                <div className="font-semibold">123 456 789</div>
              </span>
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl bg-primary-dark/60 ring-1 ring-white/10 grid place-items-center min-h-[420px]">
          <button className="grid place-items-center h-20 w-20 rounded-full bg-cream text-primary hover:scale-110 transition-transform" aria-label="Play video">
            <Play className="h-7 w-7 fill-current" />
          </button>
        </div>
      </div>
    </section>
  );
}
