import { Check, Play } from "lucide-react";

export function CtaBar() {
  return (
    <section className="bg-primary-dark text-primary-foreground py-16">
      <div className="container-x grid lg:grid-cols-3 gap-8 items-center">
        <button className="flex items-center gap-4 group" aria-label="Play video">
          <span className="grid place-items-center h-16 w-16 rounded-full bg-cream text-primary group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 fill-current" />
          </span>
          <span className="font-display font-semibold">Watch Our Process</span>
        </button>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Lets Make Your House Secure</h2>
          <p className="mt-3 text-primary-foreground/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-cream" /> Fast And Easy Proccess</div>
            <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-cream" /> Online Booking For Easy</div>
          </div>
          <a href="#" className="btn-cream">Get a Quotation</a>
        </div>
      </div>
    </section>
  );
}
