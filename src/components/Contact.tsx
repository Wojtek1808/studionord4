import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    const { error: dbError } = await getSupabase().from('contact_messages').insert(trimmed);

    if (dbError) {
      setStatus('error');
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(trimmed),
        }
      );

      if (!res.ok) {
        setStatus('error');
        return;
      }
    } catch {
      setStatus('error');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0e1a] py-24 lg:py-32">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading */}
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Kontakt
            </span>
            <h2 className="mt-4 font-display text-4xl font-700 leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Masz pomysł
              <br />
              na stronę?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/50 text-pretty">
              Opowiedz mi o swoim projekcie. Odpowiem w ciągu 24 godzin
              i bezpłatnie doradzę najlepsze rozwiązanie.
            </p>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=studionord.pl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:border-blue-400/40 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20">
                <Mail size={20} className="text-blue-400" />
              </span>
              <span>
                <span className="block text-xs text-white/40">Napisz e-mail</span>
                <span className="font-display text-base font-600 text-white">
                  studionord.pl@gmail.com
                </span>
              </span>
            </a>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              {/* Name */}
              <div className="mb-5">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                  Imię
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jan Kowalski"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-blue-400/50 focus:bg-white/10"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jan@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-blue-400/50 focus:bg-white/10"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Opowiedz mi o swoim projekcie..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-blue-400/50 focus:bg-white/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Wyślij wiadomość
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>

              {/* Success */}
              {status === 'success' && (
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3">
                  <CheckCircle2 size={20} className="text-green-400" />
                  <p className="text-sm text-green-300">
                    Wiadomość wysłana! Odpowiem w ciągu 24 godzin.
                  </p>
                </div>
              )}

              {/* Error */}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3">
                  <AlertCircle size={20} className="text-red-400" />
                  <p className="text-sm text-red-300">
                    Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na e-mail.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
