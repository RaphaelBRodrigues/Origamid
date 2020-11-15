import React, { useEffect } from 'react';
import Produto from './Produto';
import Teste from './Teste';

function App() {
  const [product, setProduct] = React.useState(null);

  async function fetchItem(selectedProduct) {
    const data = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${selectedProduct}`,
    );
    const json = await data.json();
    setProduct(json);
    savePreference(selectedProduct);
  }

  function savePreference(id) {
    localStorage.setItem('produto', id);
  }

  useEffect(() => {
    const preference = localStorage.getItem('produto');
    if (preference) fetchItem(preference);
  }, []);

  return (
    <div className="App">
      <button onClick={(e) => fetchItem(e.target.innerText)}>Smartphone</button>
      <button onClick={(e) => fetchItem(e.target.innerText)}>Notebook</button>
      <h1>Preferência: {product && product.id}</h1>
      {product && <Produto product={product} />}
    </div>
  );
}

export default App;
