import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import styled from 'styled-components';
import Contacts from './pages/Contacts';

const Container = styled.div`
  width:60%;
  margin:3rem auto;
`;

function App() {

  return (
    <BrowserRouter>
    <Container>
      <Header />
      <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/produto/:id" element={<Product/>} />
        <Route path="/contato" element={<Contacts/>} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
