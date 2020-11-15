import React, { useEffect, useState } from 'react';

export const ProductsContext = React.createContext();

export const ProductsStorage = ({ children }) => {
  const [products, setProducts] = useState([]);

  async function fetchApi() {
    const data = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
    const json = await data.json();

    setProducts(json);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  function limparDados() {
    setProducts([]);
  }

  const data = {
    limparDados,
    products,
  };

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};
 