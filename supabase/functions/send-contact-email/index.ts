import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Brak wymaganych pól: name, email, message.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY') ?? 're_89G4LpMh_FKx772EreztSB7CHxy6TYW84';

    const RECIPI = 'studionord.pl@gmail.com';

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Studio Nord <onboarding@resend.dev>',
        to: [RECIPI],
        reply_to: email,
        subject: `Nowa wiadomość od ${name} — Studio Nord`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f9fb; border-radius: 16px;">
            <div style="background: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb;">
              <h1 style="font-size: 22px; color: #0a0e1a; margin: 0 0 24px 0;">Nowa wiadomość kontaktowa</h1>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 80px; vertical-align: top;">Imię:</td>
                  <td style="padding: 8px 0; color: #0a0e1a; font-size: 14px; font-weight: 600;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">E-mail:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #2563eb; font-size: 14px; font-weight: 600; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>
              <div style="margin: 24px 0 0 0; padding: 16px; background: #f8f9fb; border-radius: 8px;">
                <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Wiadomość</p>
                <p style="color: #0a0e1a; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
              </div>
              <div style="margin: 32px 0 0 0; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">Wiadomość wysłana z formularza kontaktowego na stronie Studio Nord.</p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errBody = await emailRes.text();
      console.error('Resend error:', errBody);
      return new Response(
        JSON.stringify({ error: 'Nie udało się wysłać e-maila.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Edge function error:', err);
    return new Response(
      JSON.stringify({ error: 'Wystąpił błąd serwera.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
