import React from 'react';
import styles from './photosItem.module.css';
import Image from '../../../Helper/Image';

function PhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  const regex = /^[l]+$/;

  return (
    <li onClick={handleClick} className={styles.photo}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

export default PhotosItem;
