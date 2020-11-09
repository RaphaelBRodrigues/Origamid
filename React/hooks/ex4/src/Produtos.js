import React, { useContext, useEffect } from 'react';
import { ProductsContext } from './ProductsContext';

function Produtos() {
  const { products, limparDados } = useContext(ProductsContext);
  console.log(products);

  return (
    <div>
      <ul>
        {products.map(({ id }) => {
          return <li key={id}>{id}</li>;
        })}
      </ul>
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
}

export default Produtos;
