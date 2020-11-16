import { NavLink } from 'react-router-dom';
import React from 'react';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
    <NavLink to="/">
      <S.Button>
        Produtos
      </S.Button>
    </NavLink>

    <NavLink to="contato">
        <S.Button>
          Contato
        </S.Button>
      </NavLink>
    </S.Header>
  )
}

export default Header;