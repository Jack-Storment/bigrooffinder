import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Big Roof Finder - Advanced GIS Roof Analysis',
  description: 'Find the biggest roofs in your area with advanced GIS technology. Identify shingle types, analyze roof conditions, and generate leads for your roofing business.',
  keywords: 'roof analysis, GIS mapping, roofing leads, commercial roofs, shingle detection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}