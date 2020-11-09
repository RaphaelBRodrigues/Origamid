import React, { useState } from 'react';
import Button from './Button';
import Produto from './Produto';

function Display() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Button setData={setData} setLoading={setLoading} product="tablet" />
      <Button setData={setData} setLoading={setLoading} product="smartphone" />
      <Button setData={setData} setLoading={setLoading} product="notebook" />

      {data && !loading && <Produto data={data} />}
      {loading && 'Carregando'}
    </div>
  );
}

export default Display;
