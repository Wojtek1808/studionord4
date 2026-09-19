import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Strona dla restauracji',
    category: 'Restauracja',
    description: 'Nowoczesna i elegancka strona restauracji, która prezentuje menu, klimat lokalu oraz najważniejsze informacje, ułatwiając klientom szybkie zapoznanie się z ofertą i kontakt z restauracją.',
    image: 'https://imgur.com/VryxY1u.jpg'  ,
    year: '2026',
  },
  {
    title: 'Barber Shop',
    category: 'Landing page',
    description: 'Nowoczesna strona internetowa dla barbera z ofertą usług, galerią i rezerwacją wizyt.',
    image: 'https://i.imgur.com/8FlCFnv.jpeg',
    year: '2026',
  },
] as const;

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              Portfolio
            </span>
            <h2 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-[#0a0e1a] sm:text-5xl">
              Wybrane projekty
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#0a0e1a]/50">
            Każdy projekt to indywidualne podejście — od pierwszej rozmowy
            po finalną publikację. Oto kilka realizacji, z których jestem dumny.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className={`reveal reveal-delay-${(i % 2) + 1} group`}
            >
              {/* Browser mockup */}
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#f1f3f7] shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-black/10">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-black/5 bg-white px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex-1">
                    <div className="mx-auto flex h-6 max-w-xs items-center justify-center rounded-md bg-[#f1f3f7] px-3 text-xs text-[#0a0e1a]/40">
                      {project.title.toLowerCase().replace(/\s/g, '')}.pl
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                    width={800}
                    height={500}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/20 to-transparent" />
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#0a0e1a]/30">{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-600 text-[#0a0e1a]">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#0a0e1a]/50">
                    {project.description}
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#2563eb] group-hover:bg-[#2563eb]">
                  <ArrowUpRight
                    size={18}
                    className="text-[#0a0e1a] transition-colors group-hover:text-white"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
