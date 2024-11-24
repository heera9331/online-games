import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GameHub - Your Ultimate Gaming Destination',
  description: 'Join millions of players worldwide in the ultimate gaming platform. Play hundreds of games, join tournaments, and connect with gamers globally.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        
      <body className={inter.className}>{children}</body>
    </html>
  );
}