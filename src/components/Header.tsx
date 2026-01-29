// src/components/Header.tsx
import Link from 'next/link';

/**
 * Componente de navegação principal.
 * Utiliza o componente Link do Next.js para navegação Client-side sem refresh.
 */
const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul className="nav-list">
          {/* O Next.js 15 gerencia as rotas automaticamente pela pasta /app */}
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;