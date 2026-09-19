import { Globe, Layout, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Strony firmowe',
    description:
      'Profesjonalne strony, które budują zaufanie i prezentują Twoją markę w najlepszym świetle. Dopasowane do branży, zoptymalizowane pod wyszukiwarki.',
    features: ['Szybkie ładowanie', 'SEO-ready', 'Responsywność'],
  },
  {
    icon: Layout,
    title: 'Landing page',
    description:
      'Wysokokonwertujące strony lądowania dla kampanii, produktów i usług. Projektowane z myślą o jednym celu — zamianie odwiedzających w klientów.',
    features: ['Wysoka konwersja', 'A/B testy', 'Analytics'],
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0e1a] py-24 lg:py-32">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Usługi
          </span>
          <h2 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-white sm:text-5xl">
            Wszystko, czego potrzebuje
            <br />
            <span className="text-blue-400">Twoja obecność online</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-blue-400/30 hover:bg-white/[0.06]`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

              {/* Icon */}
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                <service.icon size={26} className="text-blue-400" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-2xl font-600 text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-white/50">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/60"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
