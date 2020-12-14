import React from 'react';
import useFetch from '../../../../Hooks/useFetch';
import styles from './stats.module.css';
import { STATS_GET } from '../../../../api';
import Loading from '../../../../Components/Helper/Loading';
import Error from '../../../../Components/Helper/Error';
import UserContext from '../../../../UserContext';

const UserStatsGraphs = React.lazy(() => {
  return import('./Graphs');
});

function Stats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <React.Suspense fallback={<Loading />}>
      <UserStatsGraphs data={data} />
    </React.Suspense>
  );
}

export default Stats;
