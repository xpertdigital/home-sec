import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import heroImg from "@/assets/hero-security.jpg";

// Defer below-the-fold sections to reduce initial JS payload.
const Services = lazy(() => import("@/components/site/Services").then(m => ({ default: m.Services })));
const About = lazy(() => import("@/components/site/About").then(m => ({ default: m.About })));
const Stats = lazy(() => import("@/components/site/Stats").then(m => ({ default: m.Stats })));
const WhyUs = lazy(() => import("@/components/site/WhyUs").then(m => ({ default: m.WhyUs })));
const Steps = lazy(() => import("@/components/site/Steps").then(m => ({ default: m.Steps })));
const Portfolio = lazy(() => import("@/components/site/Portfolio").then(m => ({ default: m.Portfolio })));
const CtaBar = lazy(() => import("@/components/site/CtaBar").then(m => ({ default: m.CtaBar })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const Blog = lazy(() => import("@/components/site/Blog").then(m => ({ default: m.Blog })));
const Footer = lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HouseSec — Smart House Security Installation Services" },
      { name: "description", content: "Professional smart home security installation: alarms, CCTV, keyless doors and full house integration. Get a free quote today." },
      { property: "og:title", content: "HouseSec — Smart House Security Installation" },
      { property: "og:description", content: "15+ years installing smart alarms, CCTV, keyless doors and integrated home security systems." },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" },
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
      <Suspense fallback={null}>
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
      </Suspense>
    </main>
  );
}
