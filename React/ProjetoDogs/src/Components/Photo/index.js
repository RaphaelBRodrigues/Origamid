import React from 'react';
import style from './photo.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Components/Helper/Error';
import Loading from '../../Components/Helper/Loading';
import PhotoContent from './Content';
import { PHOTO_GET } from '../../api';

function Modal({ photo }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);

    request(url, options);
  }, [photo, request]);

  return (
    <div>
      {error && <Error error={error} />}
      {loading && <Loading error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default Modal;
