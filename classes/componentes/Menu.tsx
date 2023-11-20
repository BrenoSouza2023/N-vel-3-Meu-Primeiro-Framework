// Menu.tsx

import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroLista">
              <a className="nav-link">Lista de Livros</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroDados">
              <a className="nav-link">Dados do Livro</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
