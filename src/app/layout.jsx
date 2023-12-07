// Styles
import '@/styles/globals.scss';

// Fonts
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Boilerplate NextJS',
  description: 'NextJS, Sass, Storybook',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} page-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
