import React from 'react';
import style from './modal.module.css';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from '../../Photo/Content';
import { PHOTO_GET } from '../../../api';

function Modal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);

    request(url, options);
  }, [photo, request]);

  function handleOutSideClick(event) {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={style.modal} onClick={handleOutSideClick}>
      {error && <Error error={error} />}
      {loading && <Loading error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default Modal;
