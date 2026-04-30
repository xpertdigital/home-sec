import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary-dark text-primary-foreground/90 text-xs">
      <div className="container-x flex h-10 items-center justify-between">
        <div className="flex items-center gap-3">
          {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="social">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-white">Schedule Meeting</a>
          <a href="#" className="hover:text-white">Term Of Use</a>
          <a href="#" className="hover:text-white">Make an Offer</a>
        </div>
      </div>
    </div>
  );
}
