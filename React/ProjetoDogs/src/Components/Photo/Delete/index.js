import React from 'react';
import style from './delete.module.css';
import { PHOTO_DELETE } from '../../../api';
import useFetch from '../../../Hooks/useFetch';

function Delete({ id }) {
  const { request, loading } = useFetch();
  async function handleClick(e) {
    const { url, options } = PHOTO_DELETE(id);
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (!confirm) return false;

    const { resp } = await request(url, options);

    if (resp.ok) {
      window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={style.delete}>
          Carregando...
        </button>
      ) : (
        <button onClick={handleClick} className={style.delete}>
          Deletar
        </button>
      )}
    </>
  );
}

export default Delete;
