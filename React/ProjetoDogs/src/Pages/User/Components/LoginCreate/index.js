import React from 'react';
import Input from '../../../../Components/Form/Input';
import Button from '../../../../Components/Form/Button';
import Error from '../../../../Components/Helper/Error';
import useForm from '../../../../Hooks/useForm';
import { USER_POST } from '../../../../api';
import { UserContext } from '../../../../UserContext';
import useFetch from '../../../../Hooks/useFetch';

function LoginCreate() {
  const username = useForm();
  const password = useForm();
  const email = useForm('email');
  const { userLogin } = React.useContext(UserContext);
  const { request, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: username.value,
      password: password.value,
      email: email.value,
    };
    const { url, options } = USER_POST(data);

    const { resp } = await request(url, options);
    if (resp && resp.ok) {
      userLogin(data.username, data.password);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled> Cadastrando... </Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
}

export default LoginCreate;
