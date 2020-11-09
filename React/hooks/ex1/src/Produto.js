import React from 'react';

function Produto({ data }) {
  return (
    <fieldset>
      <legend>{data.id}</legend>
      <div>
        <label>Preço </label>
        <input defaultValue={`R$ ${data.preco}`} />
      </div>
      <div>
        <p>{data.descricao}</p>
      </div>
      {data.fotos.map(({ titulo, src }) => {
        <img src={src} title={titulo} />;
      })}
    </fieldset>
  );
}

export default Produto;
