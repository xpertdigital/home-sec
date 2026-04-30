const steps = [
  { n: "01.", title: "Make Appointment Date & Package" },
  { n: "02.", title: "Payment & Confirmation" },
  { n: "03.", title: "We Come To & Processing Work" },
];

export function Steps() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="section-title">Easy Working Step For Instalation</h2>
          <p className="mt-4 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="font-display text-6xl font-extrabold text-primary/15">{s.n}</div>
              <div className="-mt-8 relative">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-display font-bold mb-4">{i + 1}</div>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
