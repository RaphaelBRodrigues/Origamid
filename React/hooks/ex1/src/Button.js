import React from 'react';
import Display from './Display';

function Button({ product, setLoading, setData }) {
  async function handleButton() {
    setLoading(true);
    const data = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${product}`,
    );
    const json = await data.json();
    setData(json);
    setLoading(false);
  }

  return <button onClick={handleButton}>{product}</button>;
}

export default Button;
