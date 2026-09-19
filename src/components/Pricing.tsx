import { Check, ArrowUpRight } from 'lucide-react';

const PLANS = [
  {
    name: 'Landing page',
    price: '500',
    description: 'Idealna na start — jedna strona lądowania z czystym designem i formularzem kontaktowym.',
    features: [
      'Nowoczesny wygląd',
      'Najważniejsze informacje',
      'Formularz kontaktowy',
      'Responsywność (mobile-first)',
      'Podstawowe SEO',
      'Czas realizacji: 7 dni',
    ],
    highlighted: true,
  },
  {
    name: 'Strona firmowa',
    price: '800',
    description: 'Kompleksowa strona dla firmy — podstrony, animacje i pełna optymalizacja.',
    features: [
      'Do 5 podstron',
      'Oferta firmy',
      'Galeria / portfolio',
      'Optymalizacja SEO ',
      'Integracja z mediami społecznościowymi',
      'Czas realizacji: 14 dni',
    ],
    highlighted: false,
  },
] as const;

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#f8f9fb] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Cennik
          </span>
          <h2 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-[#0a0e1a] sm:text-5xl">
            Przejrzyste ceny,
            <br />
            bez ukrytych kosztów
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0a0e1a]/50">
            Wybierz pakiet, który pasuje do Twoich potrzeb. Wycena zawsze
            omawiana indywidualnie — bez niespodzianek.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-6 lg:grid-cols-2">
          {PLANS.map((plan, i) => (
            <article
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 ${
                plan.highlighted
                  ? 'border-[#0a0e1a] bg-[#0a0e1a] text-white shadow-2xl shadow-black/20'
                  : 'border-black/10 bg-white text-[#0a0e1a] hover:border-[#2563eb]/30 hover:shadow-xl'
              }`}
            >
              {/* Glow on highlighted */}
              {plan.highlighted && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              )}

              <div className="relative">
                {/* Badge */}
                {plan.highlighted && (
                  <span className="absolute right-0 top-0 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                    Najpopularniejszy
                  </span>
                )}

                <h3 className={`font-display text-2xl font-600 ${plan.highlighted ? 'text-white' : 'text-[#0a0e1a]'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${plan.highlighted ? 'text-white/50' : 'text-[#0a0e1a]/50'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`font-display text-5xl font-700 ${plan.highlighted ? 'text-white' : 'text-[#0a0e1a]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg font-medium ${plan.highlighted ? 'text-white/60' : 'text-[#0a0e1a]/50'}`}>
                    zł
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.highlighted ? 'bg-blue-500' : 'bg-[#0a0e1a]'
                        }`}
                      >
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </span>
                      <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-[#0a0e1a]/70'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`group mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-blue-500 text-white hover:bg-blue-400'
                      : 'bg-[#0a0e1a] text-white hover:bg-[#2563eb]'
                  }`}
                >
                  Wybieram ten pakiet
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="reveal reveal-delay-3 mt-10 text-center text-sm text-[#0a0e1a]/40">
          Potrzebujesz czegoś indywidualnego? Napisz — przygotuję wycenę dopasowaną do Twojego projektu.
        </p>
      </div>
    </section>
  );
}
