import './globals.css'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ weight: '700', subsets: ['latin'] })

export const metadata = {
  title: 'Splitter - Tip Calculator',
  description: 'Frontend Mentor Tip Calculator App built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
