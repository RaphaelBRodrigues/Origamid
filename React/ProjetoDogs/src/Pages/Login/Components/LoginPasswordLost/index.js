import React from 'react';
import Input from '../../../../Components/Form/Input';
import Button from '../../../../Components/Form/Button';
import Error from '../../../../Components/Helper/Error';
import useForm from '../../../../Hooks/useForm';
import useFetch from '../../../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../../../api';

function LoginPasswordLost() {
  const email = useForm();
  const { request, data, loading, error } = useFetch();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      request(url, options);
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" {...email} name="login" />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
}

export default LoginPasswordLost;
