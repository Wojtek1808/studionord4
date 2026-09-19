import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-32 pb-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-300/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start">
          {/* Badge */}
          <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium text-[#0a0e1a]/70">
              Przyjmuję nowe projekty
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal reveal-delay-1 font-display text-[2.75rem] font-700 leading-[1.05] tracking-tight text-[#0a0e1a] sm:text-6xl lg:text-[5.5rem]">
            Tworzę strony,
            <br />
            które dobrze
            <br />
            <span className="relative inline-block">
              <span className="text-gradient">wyglądają</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C70 3 230 3 298 7"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            i jeszcze lepiej
            <br />
            działają.
          </h1>

          {/* Sub + buttons */}
          <div className="reveal reveal-delay-2 mt-10 flex max-w-2xl flex-col gap-8">
            <p className="text-lg leading-relaxed text-[#0a0e1a]/60 text-pretty sm:text-xl">
              Projektuję i buduję nowoczesne strony internetowe —  Każdy projekt jest unikalny, szybki i dopracowany
              w każdym detalu.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0e1a] px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#2563eb] hover:shadow-xl hover:shadow-blue-500/25"
              >
                Zobacz projekty
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0a0e1a]/15 px-7 py-4 text-base font-medium text-[#0a0e1a] transition-all duration-300 hover:border-[#0a0e1a] hover:bg-[#0a0e1a] hover:text-white"
              >
                Napisz do mnie
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-4 absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="text-xs font-medium uppercase tracking-widest text-[#0a0e1a]/40">
            Przewiń
          </span>
          <ArrowDown size={16} className="animate-bounce text-[#0a0e1a]/40" />
        </div>
      </div>
    </section>
  );
}
