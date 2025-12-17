import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ashenvell - Web Development, Mobile Apps & AI Solutions',
  description: 'We create futuristic digital experiences and innovative software solutions. Web development, mobile apps, UI/UX design and artificial intelligence.',
  keywords: 'web development, mobile apps, UI/UX design, artificial intelligence, software solutions, Next.js, React, Node.js',
  authors: [{ name: 'Ashenvell' }],
  icons: {
    icon: '/alogo.png',
  },
  alternates: {
    canonical: 'https://ashenvell.com/en',
    languages: {
      'es': 'https://ashenvell.com',
      'en': 'https://ashenvell.com/en',
    },
  },
  openGraph: {
    locale: 'en_US',
    alternateLocale: 'es_ES',
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
