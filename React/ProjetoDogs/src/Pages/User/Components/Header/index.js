import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import styles from './header.module.css';

function Header() {
  const [title, setTitle] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      default:
        setTitle('Minha conta');
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <Nav />
    </header>
  );
}

export default Header;
