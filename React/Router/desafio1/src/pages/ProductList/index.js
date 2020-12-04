import React from 'react'
import ProductThumb from '../../components/ProductThumb';
import * as S from './styled';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products,setProducts] = React.useState(false);

  React.useEffect(() => {
    async function fetchProducts(){
      const resp = await fetch('https://ranekapi.origamid.dev/json/api/produto');
      const json = await resp.json();
      setProducts(json);
    }
    fetchProducts();
  },[]);

  if(!products) return null;

  return (
    <S.ProductsWrapper>
      {products.map(({ fotos , nome , id }) => {
        return(
          <Link key={id} to={`/produto/${id}`}>
           <ProductThumb  img={fotos[0]} name={nome} />
          </Link>
        );
      })}
    </S.ProductsWrapper>
  )
}

export default Product
