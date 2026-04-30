const steps = [
  { n: "01.", title: "Book A Free Home Survey", desc: "Pick a date online and a specialist visits to assess your home." },
  { n: "02.", title: "Get A Tailored Quote", desc: "We design a system around your layout, budget and lifestyle — no surprises." },
  { n: "03.", title: "Same-Day Installation", desc: "Our team installs, configures and trains you on every device before we leave." },
];

export function Steps() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="section-title">A Simple 3-Step Installation Process</h2>
          <p className="mt-4 text-muted-foreground">From the first call to the final walkthrough, we keep things transparent, on time and stress-free.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="font-display text-6xl font-extrabold text-primary/15">{s.n}</div>
              <div className="-mt-8 relative">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-display font-bold mb-4">{i + 1}</div>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
