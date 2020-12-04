import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let resp = null;
    let json = null;
    try {
      setError(null);
      setLoading(true);
      resp = await fetch(url, options);
      json = await resp.json();
      if (!resp.ok) {
        throw new Error(json.message);
      }
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      setData(json);
      return {
        resp,
        json,
      };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
