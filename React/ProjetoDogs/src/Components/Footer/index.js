import React from 'react';
import style from './feed.module.css';
import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';

function Feed() {
  return (
    <footer className={style.teste}>
      <Dogs />
      <p>Dogs. Alguns direitos reservaddos</p>
    </footer>
  );
}

export default Feed;
