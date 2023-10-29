// Styles
import 'styles/globals.scss';

import { Inter } from 'next/font/google';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Boilerplate',
  description: 'Em construção',
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
