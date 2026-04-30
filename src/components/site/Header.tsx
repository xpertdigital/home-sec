import { MapPin, Phone, Menu, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  return (
    <header className="bg-background">
      <div className="container-x flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid place-items-center h-10 w-10 rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight">HOUSE<span className="text-primary">SEC</span></span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-md bg-accent text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Visit Our Office</div>
              <div className="text-muted-foreground">128 Market St, San Diego CA</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-md bg-accent text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <div className="font-semibold text-foreground">24/7 Support Line</div>
              <div className="text-muted-foreground">(+1) 619 555 0142</div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-primary text-primary-foreground">
        <div className="container-x flex items-center justify-between">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "bg-primary-dark" }}
                  className="flex items-center gap-1 px-5 py-5 text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="p-2 lg:hidden" aria-label="Open menu"><Menu className="h-6 w-6" /></button>
        </div>
      </nav>
    </header>
  );
}
