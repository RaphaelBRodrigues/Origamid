import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../../../UserContext';

import { ReactComponent as MinhaFotosSVG } from '../../../../../../Assets/feed.svg';
import { ReactComponent as EstatisticasSVG } from '../../../../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotosSVG } from '../../../../../../Assets/adicionar.svg';
import { ReactComponent as SairSVG } from '../../../../../../Assets/sair.svg';

import styles from './nav.module.css';
import useMedia from '../../../../../../Hooks/useMedia';

const Nav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const isMobile = useMedia('(max-width:40rem)');

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink activeClassName={styles.active} to="/conta" end>
          <MinhaFotosSVG />
          {isMobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink activeClassName={styles.active} to="/conta/estatisticas">
          <EstatisticasSVG />
          {isMobile && 'Estatísticas'}
        </NavLink>
        <NavLink activeClassName={styles.active} to="/conta/postar">
          <AdicionarFotosSVG />
          {isMobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={userLogout}>
          <SairSVG />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default Nav;
