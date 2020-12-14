import React from 'react';
import styles from './photos.module.css';
import PhotosItem from './PhotosItem';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../../Components/Helper/Error';
import { PHOTOS_GET } from '../../../api';
import Loading from '../../Helper/Loading';

function Photos({ setModalPhoto, user, page, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user: user || 0,
      });
      const { resp, json } = await request(url, options);
      if (resp && resp.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, page]);
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
