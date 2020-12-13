import React from 'react';
import styles from './photos.module.css';
import PhotosItem from './PhotosItem';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../../Components/Helper/Error';
import { PHOTOS_GET } from '../../../api';
import Loading from '../../Helper/Loading';

function Photos({ setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 62,
        user: 0,
      });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);
  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => {
          return (
            <PhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
      </ul>
    );
  else {
    return null;
  }
}

export default Photos;
