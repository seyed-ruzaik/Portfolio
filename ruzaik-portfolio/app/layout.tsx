import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Seyed Ruzaik | Software Engineer, Lecturer, Researcher',
  description: 'Building intelligent software systems, exploring data and AI, and sharing knowledge with the next generation of technology professionals.',
  openGraph: {
    title: 'Seyed Ruzaik | Portfolio',
    description: 'Engineering Knowledge. Building Intelligence. Teaching the Future.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <Script
          id="fetch-override"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof window !== 'undefined') {
                  var _fetch = window.fetch;
                  Object.defineProperty(window, 'fetch', {
                    configurable: true,
                    enumerable: true,
                    get: function() { return _fetch; },
                    set: function(v) { _fetch = v; }
                  });
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-white" suppressHydrationWarning>
        <div className="paper-texture" />
        {children}
      </body>
    </html>
  );
}
