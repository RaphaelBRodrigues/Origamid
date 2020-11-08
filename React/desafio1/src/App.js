import react from 'react';
import Products from './Products';
import Home from './Home';

function App() {
  const { pathname } = window.location;
  return (
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Produtos</a></li>
      </ul>
      
      
      {pathname === "/products" 
      ?
        <Products/>
      :
        <Home />
      }
    </div>
  );
}

export default App;
