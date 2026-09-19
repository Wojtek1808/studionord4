import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Studio Nord', href: '#hero' },
  { label: 'Projekty', href: '#portfolio' },
  { label: 'Usługi', href: '#services' },
  { label: 'O mnie', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Studio Nord">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-lg bg-[#0a0e1a] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative font-display text-lg font-700 text-white">N</span>
            </span>
            <span className="font-display text-lg font-600 tracking-tight text-[#0a0e1a]">
              Studio Nord
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#0a0e1a]/70 transition-colors duration-200 hover:text-[#0a0e1a]"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-[#2563eb] transition-transform duration-300 hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-[#0a0e1a] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-500/25"
          >
            Napisz do mnie
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0a0e1a] transition-colors hover:bg-black/5 md:hidden"
            aria-label="Otwórz menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#0a0e1a] transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white px-6 pt-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-600 text-[#0a0e1a]">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0a0e1a] transition-colors hover:bg-black/5"
              aria-label="Zamknij menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-black/5 py-4 font-display text-2xl font-600 text-[#0a0e1a] transition-colors hover:text-[#2563eb]"
              >
                {link.label}
                <span className="text-lg font-normal text-[#0a0e1a]/30 transition-transform group-hover:translate-x-1 group-hover:text-[#2563eb]">
                  →
                </span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-auto mb-8 flex items-center justify-center rounded-full bg-[#0a0e1a] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            Napisz do mnie
          </a>
        </div>
      </div>
    </>
  );
}
