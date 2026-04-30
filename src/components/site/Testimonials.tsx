import phoneImg from "@/assets/pricing-phone.jpg";
import avatar from "@/assets/avatar-1.jpg";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "John Doe", role: "House Owner", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." },
  { name: "Sarah K.", role: "House Owner", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." },
  { name: "Mike T.", role: "House Owner", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." },
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
            <div className="mt-2 font-display font-bold">Great Reviews On Google</div>
            <div className="text-xs text-primary-foreground/80">Have rate 5 stars on Google Business</div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="eyebrow">Client Feedbacks</span>
          <h2 className="mt-3 section-title">Lets Know What Our Clients Give The Best Feedback For Our Services Provided</h2>

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
