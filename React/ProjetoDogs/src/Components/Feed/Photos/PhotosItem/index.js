import React from 'react';
import styles from './photosItem.module.css';

function PhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick} className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

export default PhotosItem;
