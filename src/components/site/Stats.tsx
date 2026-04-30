import statsImg from "@/assets/stats-woman.jpg";

const stats = [
  { value: "15Y+", label: "Business Experience" },
  { value: "120+", label: "Services Awards" },
  { value: "950+", label: "Security Inspection" },
  { value: "8K+", label: "House Installed" },
];

export function Stats() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">Our Achievements</span>
          <h2 className="mt-3 section-title">Award-Winning Home Security You Can Count On</h2>
          <p className="mt-5 text-muted-foreground max-w-lg">Fifteen years, thousands of installs, and a five-star reputation built on showing up on time and getting the job done right the first time.</p>
          <a href="#" className="btn-primary mt-7">Learn More</a>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-card p-6 ring-1 ring-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="font-display text-4xl font-extrabold text-primary">{s.value}</div>
                <div className="mt-2 font-semibold">{s.label}</div>
                <p className="mt-1 text-sm text-muted-foreground">Verified results from real customers</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={statsImg} alt="Female activating house alarm with phone" loading="lazy" width={1280} height={1024} className="rounded-2xl w-full h-[560px] object-cover" />
        </div>
      </div>
    </section>
  );
}
