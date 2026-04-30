import { MapPin, Phone, Menu, ShieldCheck, ChevronDown } from "lucide-react";

const nav = ["Homepage", "About", "Services", "Pricing Package", "Gallery", "Pages"];

export function Header() {
  return (
    <header className="bg-background">
      <div className="container-x flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2">
          <span className="grid place-items-center h-10 w-10 rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight">HOUSE<span className="text-primary">SEC</span></span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-md bg-accent text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Lets Meet Us</div>
              <div className="text-muted-foreground">California State 123 AB</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-md bg-accent text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Make a Call</div>
              <div className="text-muted-foreground">( +44 ) 123 456 789</div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-primary text-primary-foreground">
        <div className="container-x flex items-center justify-between">
          <ul className="flex items-center">
            {nav.map((item, i) => (
              <li key={item}>
                <a
                  href="#"
                  className={`flex items-center gap-1 px-5 py-5 text-sm font-medium hover:bg-primary-dark transition-colors ${i === 0 ? "bg-primary-dark" : ""}`}
                >
                  {item}
                  {i > 0 && i < 5 && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                </a>
              </li>
            ))}
          </ul>
          <button className="p-2" aria-label="Open menu"><Menu className="h-6 w-6" /></button>
        </div>
      </nav>
    </header>
  );
}
