import { Facebook, Twitter, Youtube, Linkedin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground pt-20 pb-8">
      <div className="container-x grid lg:grid-cols-4 gap-10">
        <div>
          <a href="#" className="flex items-center gap-2">
            <span className="grid place-items-center h-10 w-10 rounded-md bg-cream text-primary"><ShieldCheck className="h-5 w-5" /></span>
            <span className="font-display text-2xl font-extrabold">HOUSE<span className="text-cream">SEC</span></span>
          </a>
          <p className="mt-5 text-sm text-primary-foreground/75">Certified home security installers protecting families across Southern California with smart alarms, CCTV and full home automation.</p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center h-9 w-9 rounded-full bg-white/10 hover:bg-cream hover:text-primary transition-colors" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[{l:"Home",h:"/"},{l:"About",h:"/about"},{l:"Services",h:"/services"},{l:"Gallery",h:"/gallery"},{l:"Contact",h:"/contact"}].map((l) => (
              <li key={l.l}><a href={l.h} className="hover:text-cream">{l.l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {["House Security", "House Alarm", "House Integration", "Smart Light", "Smart Fire", "Smart House Installation"].map((l) => (
              <li key={l}><a href="#" className="hover:text-cream">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Lets Connected</h4>
          <p className="text-sm text-primary-foreground/80">128 Market Street, Suite 4B, San Diego, CA 92101</p>
          <div className="mt-4 text-sm">
            <div className="font-semibold">Telephone</div>
            <div className="text-primary-foreground/80">(+1) 619 555 0142</div>
          </div>
          <div className="mt-3 text-sm">
            <div className="font-semibold">Email Address</div>
            <div className="text-primary-foreground/80">hello@housesec.com</div>
          </div>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-primary-foreground/70">
        <div>© {new Date().getFullYear()} HouseSec — All rights reserved</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-cream">Schedule Meeting</a>
          <a href="#" className="hover:text-cream">Term Of Use</a>
          <a href="#" className="hover:text-cream">Make an Offer</a>
        </div>
      </div>
    </footer>
  );
}
