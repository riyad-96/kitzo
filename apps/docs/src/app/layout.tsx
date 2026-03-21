import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import { ProgressProvider } from '@/components/layout/ProgressProvider';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

export const metadata: Metadata = {
  title: 'kitzo – Lightweight React UI Components & Hooks',
  description:
    'Kitzo is a lightweight, production-ready React component and hooks library built for modern apps. Includes toast notifications, tooltips, debounce utilities, and responsive helpers with clean APIs and zero overengineering.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiestore = await cookies();
  const theme = cookiestore.get('theme')?.value;
  const htmlClass = theme === 'dark' ? 'dark' : '';

  return (
    <html lang="en" className={cn(htmlClass, 'font-sans', geist.variable)}>
      <body
        className={`${inter.variable} font-inter bg-background text-foreground antialiased`}
      >
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
