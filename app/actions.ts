'use server';

import { FormData } from '@/app/schemas';
import { ContactEmailTemplate } from '@/components/contact-email-template';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(values: FormData) {
    try {
        const submittedAt = new Date().toLocaleString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          dateStyle: 'short',
          timeStyle: 'short'
        });
    
        // Read the logo file
        const logoPath = path.join(process.cwd(), 'public', 'mitra-logo.png');
        const logoBuffer = fs.readFileSync(logoPath);
    
        const { data, error } = await resend.emails.send({
          from: 'Terraplenagem Mitra <onboarding@resend.dev>',
          to: [String(process.env.RESEND_EMAIL)],
          subject: 'Nova mensagem de Contato',
          react: ContactEmailTemplate({  ...values, submittedAt }),
          attachments: [
            {
              filename: 'mitra-logo.png',
              content: logoBuffer,
              contentId: 'mitra-logo'
            }
          ]
        });
    
        if (error) {
          throw error;
        }
    
        return data;
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        throw error;
    }
}