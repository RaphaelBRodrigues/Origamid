import React from 'react'
import * as S from './styled';
import { useParams } from 'react-router-dom';

function Product() {
  const [product,setProduct] = React.useState(false);
  const { id } = useParams();
  React.useEffect(()=> {
    async function fetchProduct(){
      const resp = await fetch('https://ranekapi.origamid.dev/json/api/produto/'+id);
      const json = await resp.json();
      setProduct(json);
    }
    fetchProduct();
  },[id]);

  if(!product) return null;

  console.log(product);

  return (
    <S.ProductWrapper>
      <S.ProductImageWrapper>
        {product.fotos.map((img) => {
          return <S.ProductImage key={img.src} src={img.src} />
        })}
      </S.ProductImageWrapper>
      <S.ProductTextWrapper>
        <S.ProductName>
          {product.nome}
        </S.ProductName>
        <S.ProductPrice>
          R${product.preco}
        </S.ProductPrice>
        <S.ProductDescription>
          {product.descricao}
        </S.ProductDescription>
      </S.ProductTextWrapper>
    </S.ProductWrapper>
  )
}

export default Product
