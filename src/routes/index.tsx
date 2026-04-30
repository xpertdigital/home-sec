import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Steps } from "@/components/site/Steps";
import { Portfolio } from "@/components/site/Portfolio";
import { CtaBar } from "@/components/site/CtaBar";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HouseSec — Smart House Security Installation Services" },
      { name: "description", content: "Professional smart home security installation: alarms, CCTV, keyless doors and full house integration. Get a free quote today." },
      { property: "og:title", content: "HouseSec — Smart House Security Installation" },
      { property: "og:description", content: "15+ years installing smart alarms, CCTV, keyless doors and integrated home security systems." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <About />
      <Stats />
      <WhyUs />
      <Steps />
      <Portfolio />
      <CtaBar />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
