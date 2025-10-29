import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { siteConfig } from '@/site.config';

const resend = new Resend('re_CNo2jcNL_8knCd33vPa3a6niBWK7QAZ7u');

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const domain = siteConfig.domain;
    const businessName = siteConfig.businessName;
    const whatsappPhone = '+393519898686';

    // Save customer to mailing list (audience)
    try {
      // Get or create audience for this domain
      const audiences = await resend.audiences.list();
      let audience = audiences.data?.data?.find((a: any) => a.name === `${businessName} Contacts`);

      if (!audience) {
        const newAudience = await resend.audiences.create({
          name: `${businessName} Contacts`
        });
        audience = newAudience.data as any;
      }

      // Add contact to audience
      if (audience?.id) {
        await resend.contacts.create({
          email: email,
          firstName: name,
          audienceId: audience.id
        });
      }
    } catch (error) {
      // Don't fail if mailing list fails, just log
      console.log('Mailing list error:', error);
    }

    // Send 2 emails: one to admin, one to customer
    await resend.batch.send([
      {
        from: `${businessName} <info@${domain}>`,
        to: '24prontocom@gmail.com',
        replyTo: email,
        subject: `[${businessName.toUpperCase()}] Nuova richiesta da ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
                .label { font-weight: bold; color: #1f2937; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; font-size: 14px; color: #6b7280; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Nuova Richiesta di Contatto</h2>
                  <p>Da: ${domain}</p>
                </div>
                <div class="content">
                  <div class="info-row">
                    <span class="label">Nome:</span> ${name}
                  </div>
                  <div class="info-row">
                    <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                  </div>
                  <div class="info-row">
                    <span class="label">Telefono:</span> ${phone || 'Non fornito'}
                  </div>
                  <div class="info-row">
                    <span class="label">Messaggio:</span><br><br>${message.replace(/\n/g, '<br>')}
                  </div>
                  <div class="footer">
                    <p><strong>Azioni rapide:</strong></p>
                    <p>• Rispondi a questa email per contattare direttamente il cliente</p>
                    <p>• Oppure chiamalo al ${phone || 'numero non fornito'}</p>
                    <p><br>Ricevuto il: ${new Date().toLocaleString('it-IT')}</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      },
      {
        from: `${businessName} <info@${domain}>`,
        to: email,
        replyTo: '24prontocom@gmail.com',
        subject: `Richiesta ricevuta - ${businessName}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #10b981; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
                .message-box { background: white; padding: 15px; border-left: 4px solid #10b981; margin: 20px 0; }
                .cta-button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; font-size: 14px; color: #6b7280; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Grazie per averci contattato!</h2>
                </div>
                <div class="content">
                  <p>Ciao <strong>${name}</strong>,</p>
                  <p>Abbiamo ricevuto la tua richiesta e ti risponderemo <strong>entro 15 minuti</strong>.</p>

                  <div class="message-box">
                    <p><strong>Il tuo messaggio:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                  </div>

                  <p><strong>Serve assistenza immediata?</strong></p>
                  <a href="https://wa.me/${whatsappPhone.replace(/\+/g, '')}" class="cta-button">Contattaci su WhatsApp</a>
                  <a href="tel:${whatsappPhone}" class="cta-button">Chiamaci Ora</a>

                  <div class="footer">
                    <p><strong>${businessName}</strong></p>
                    <p>Assistenza Clienti attiva 24/7</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      },
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
