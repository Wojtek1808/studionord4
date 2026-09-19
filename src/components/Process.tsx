import { MessageCircle, PenTool, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Rozmowa',
    description:
      'Poznajemy się i omawiamy Twój projekt. Dowiaduję się o Twoich celach, grupie docelowej i oczekiwaniach. To fundament całej współpracy.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Projekt',
    description:
      'Tworzę projekt wizualny w Bolcie — układ, kolory, typografię. Wspólnie go omawiamy i dopracowujemy każdy detal przed przejściem do budowy.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Budowa',
    description:
      'Koduję stronę w najnowszych technologiach. Dbam o szybkość, responsywność i dostępność. Na każdym etapie masz podgląd postępów.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Publikacja',
    description:
      'Strona trafia w twoje ręce w formie pliku, wraz z plikiem wysyłam poradnik jak podpiąć stronę oraz jak w własnym zakresie wykupić domenę.',
  },
] as const;

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
            Proces
          </span>
          <h2 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-[#0a0e1a] sm:text-5xl">
            Jak wygląda współpraca
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0a0e1a]/50">
            Cztery klarowne etapy — od pierwszej rozmowy po publikację Twojej nowej strony.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[68px] hidden h-px bg-gradient-to-r from-transparent via-[#0a0e1a]/10 to-transparent lg:block" />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} group relative`}
            >
              {/* Icon circle */}
              <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white transition-all duration-500 group-hover:border-[#2563eb] group-hover:bg-[#0a0e1a]">
                <step.icon
                  size={24}
                  className="text-[#0a0e1a] transition-colors duration-500 group-hover:text-white"
                  strokeWidth={1.5}
                />
                {/* Number badge */}
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2563eb] font-display text-[10px] font-700 text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-2xl font-600 text-[#0a0e1a]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#0a0e1a]/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
