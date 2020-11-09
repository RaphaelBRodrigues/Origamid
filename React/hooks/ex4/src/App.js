import React from 'react';
import { ProductsStorage } from './ProductsContext';
import Produtos from './Produtos';

function App() {
  return (
    <ProductsStorage>
      <Produtos />
    </ProductsStorage>
  );
}

export default App;
