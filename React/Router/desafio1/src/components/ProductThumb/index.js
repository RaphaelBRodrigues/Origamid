import React from 'react';
import * as S from './styled';

const ProductThumb = ({ img , name }) => {
  return (
    <S.ProductThumbWrapper>
      <S.ProductImage src={img.src} />
      <S.ProductName>
        {name}
      </S.ProductName>
    </S.ProductThumbWrapper>
  )
}

export default ProductThumb;