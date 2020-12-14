import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import PhotoComments from '../Comments';
import Delete from '../Delete';
import style from './content.module.css';
import Image from '../../Helper/Image/';

function PhotoContent({ data, single }) {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <div className={`${style.photo} ${single ? style.single : ''} `}>
      <div className={style.img}>
        <Image src={photo.src} alt={photo.alt} />
        {/* <img src={photo.src} alt={photo.alt} /> */}
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            {user.data && user.data.username === photo.author ? (
              <Delete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade > 1 ? 'Anos' : 'Ano'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
}

export default PhotoContent;
