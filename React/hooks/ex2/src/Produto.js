import React from 'react';

function Produto({ product }) {
  return (
    <div>
      {product.id} - {product.preco}
    </div>
  );
}

export default Produto;
