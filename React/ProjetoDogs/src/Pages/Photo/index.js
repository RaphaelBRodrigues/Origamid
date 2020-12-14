import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../../Components/Helper/Error';
import Loading from '../../Components/Helper/Loading';
import Content from '../../Components/Photo/Content';

const Photo = () => {
  const { id } = useParams();
  const { request, error, loading, data } = useFetch();

  React.useEffect(() => {
    const { url } = PHOTO_GET(id);
    request(url);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <section className="container  mainContainer">
      <Content single data={data} />
    </section>
  );
};

export default Photo;
