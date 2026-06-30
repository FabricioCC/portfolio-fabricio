import type { ReactNode } from 'react';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
  title: 'Carlos Fabrício — Automação pra quem trabalha com clientes e projetos',
  description: 'Eu construo sistemas que tiram o trabalho repetitivo do seu escritório.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} ${jetbrains.variable} bg-navy text-off-white font-sans text-[17px] leading-[1.65] overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}