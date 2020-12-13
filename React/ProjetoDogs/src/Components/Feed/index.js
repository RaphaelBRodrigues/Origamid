import React from 'react';
import style from './feed.module.css';
import Modal from './Modal';
import Photos from './Photos';

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div className={style.teste}>
      {modalPhoto && <Modal setModalPhoto={setModalPhoto} photo={modalPhoto} />}

      <Photos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
