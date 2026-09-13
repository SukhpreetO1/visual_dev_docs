import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Visual Dev Docs — Interactive Engineering Lab',
  description:
    "Master Programming, DSA, Git, DevOps, and System Design with real-time interactive execution visualizations, memory graph inspection, and context-aware AI.",
  keywords: ['visual docs', 'developer learning', 'interactive coding', 'WASM sandbox', 'DSA visualizer'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        {/* Google Fonts: Plus Jakarta Sans + Inter + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{
          backgroundColor: '#0b1326',
          color: '#dae2fd',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
