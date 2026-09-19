import { Check } from 'lucide-react';

const STATS = [
  { value: '50+', label: 'Projektów' },
  { value: '2', label: 'Lata doświadczenia' },
  { value: '100%', label: 'Zadowolonych klientów' },
] as const;

const SKILLS = ['Bolt', 'Netlify', 'OVHcloud', 'Figma', 'Node.js', 'Supabase', 'Framer Motion', 'SEO'] as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f8f9fb] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <div className="reveal relative">
            <div className="relative mx-auto max-w-md lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-[#2563eb]/20" />
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-[#0a0e1a]/5" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                <img
                  src="https://imgur.com/84W2ANF.jpeg"
                  alt="Moje miejsce pracy — biuro Studio Nord"
                  loading="lazy"
                  width={640}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/30 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <div>
                    <p className="font-display text-lg font-600 text-white">Studio Nord</p>
                    <p className="text-sm text-white/70">Web Designer & Developer</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                    <Check size={24} className="text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              O mnie
            </span>
            <h2 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-[#0a0e1a] sm:text-5xl">
              Projektuję z pasją,
              <br />
              buduję z precyzją
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#0a0e1a]/60 text-pretty">
              Cześć! Jestem Wojtek, twórca Studio Nord.

Od kilku miesięcy zajmuję się projektowaniem i tworzeniem stron internetowych dla firm. Pomagam przedsiębiorcom zaistnieć w internecie, tworząc nowoczesne, estetyczne i dopasowane do ich potrzeb strony.

Mam 17 lat, więc moją największą przeszkodą są obecnie kwestie formalne. Mimo tego rozwijam swoje umiejętności, realizuję projekty i dorabiam, zdobywając przy tym doświadczenie.

Ty otrzymujesz gotową stronę internetową, a ja mogę rozwijać swoje portfolio i zdobywać kolejne doświadczenie.

Jeśli potrzebujesz strony dla swojej firmy — napisz do mnie!
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#0a0e1a]/60 text-pretty">
              Każdy projekt traktuję indywidualnie. Nie korzystam z gotowych szablonów —
              projektuję od zera, dopasowując każdy element do Twojej markiń i celów.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-700 text-[#0a0e1a]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[#0a0e1a]/50">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-[#0a0e1a]/40">
                Narzędzia, których używam:
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm font-medium text-[#0a0e1a]/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
