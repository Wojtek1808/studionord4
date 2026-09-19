import { ArrowUp } from 'lucide-react';

const LINKS = [
  { label: 'Projekty', href: '#portfolio' },
  { label: 'Usługi', href: '#services' },
  { label: 'O mnie', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-lg bg-[#0a0e1a] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative font-display text-lg font-700 text-white">N</span>
            </span>
            <span className="font-display text-lg font-600 tracking-tight text-[#0a0e1a]">
              Studio Nord
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#0a0e1a]/60 transition-colors hover:text-[#0a0e1a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-sm font-medium text-[#0a0e1a]/60 transition-colors hover:text-[#0a0e1a]"
          >
            Do góry
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#2563eb] group-hover:bg-[#2563eb]">
              <ArrowUp
                size={16}
                className="text-[#0a0e1a] transition-colors group-hover:text-white"
              />
            </span>
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-black/5 pt-6 sm:flex-row">
          <p className="text-sm text-[#0a0e1a]/40">
            © 2026 Studio Nord. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-[#0a0e1a]/40">
            Zaprojektowane i zbudowane z pasją.
          </p>
        </div>
      </div>
    </footer>
  );
}
