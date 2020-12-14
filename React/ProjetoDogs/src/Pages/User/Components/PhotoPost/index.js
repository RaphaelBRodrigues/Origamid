import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './photopost.module.css';
import Input from '../../../../Components/Form/Input';
import Button from '../../../../Components/Form/Button';
import Error from '../../../../Components/Helper/Error';
import useForm from '../../../../Hooks/useForm';
import useFetch from '../../../../Hooks/useFetch';
import { PHOTO_POST } from '../../../../api';

function PhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { request, error, loading, data } = useFetch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!error && data) {
      navigate('/conta');
    }
  }, [data, navigate]);

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);

    await request(url, options);
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input {...nome} label="Nome" type="text" name="nome" />
        <Input {...peso} label="Peso" type="number" name="peso" />
        <Input {...idade} label="Idade" type="number" name="idade" />
        <input
          className={styles.file}
          onChange={handleImgChange}
          label="img"
          type="file"
          name="img"
        />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
      <Error error={error} />
    </section>
  );
}

export default PhotoPost;
