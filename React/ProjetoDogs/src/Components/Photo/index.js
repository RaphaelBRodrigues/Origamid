import React from 'react';
import style from './modal.module.css';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from '../Photo/Content';
import { PHOTO_GET } from '../../../api';

function Modal({ photo }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);

    request(url, options);
  }, [photo, request]);

  return (
    <div className={style.modal}>
      {error && <Error error={error} />}
      {loading && <Loading error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default Modal;
