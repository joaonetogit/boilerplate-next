// Core
import Link from 'next/link';

// Styles
import 'styles/components/header.scss';

// Contants
import { navLinks } from 'constants/Header';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          Header
          <nav>
            {navLinks.map((link) => (
              <Link href={link.path} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
