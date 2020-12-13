import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import PhotoComments from '../Comments';
import Delete from '../Delete';
import style from './content.module.css';

function PhotoContent({ data }) {
  const { photo, comments } = data;
  const user = useContext(UserContext);
  console.info(user);

  return (
    <div className={style.photo}>
      <div className={style.img}>
        <img src={photo.src} alt={photo.alt} />
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
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}

export default PhotoContent;
