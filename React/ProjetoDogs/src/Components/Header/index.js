import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../UserContext';

function Footer() {
  const { data } = React.useContext(UserContext);

  return (
    <div className={`${style.header}`}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={style.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Footer;
