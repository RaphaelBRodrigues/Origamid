import React from 'react';
import Input from '../../../../Components/Form/Input';
import Button from '../../../../Components/Form/Button';
import Error from '../../../../Components/Helper/Error';
import useForm from '../../../../Hooks/useForm';
import useFetch from '../../../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../../../api';
import { useNavigate } from 'react-router-dom';

function LoginPasswordReset() {
  const reset = useForm();
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const { request, loading, error } = useFetch();
  const navigate = useNavigate();

  React.useState(() => {
    const params = URLSearchParams(window.location.search);
    const key = params.get('key');

    if (key) {
      setKey(key);
    }
    if (login) {
      setKey(login);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
    });
    const { resp } = await request(url, options);
    if (resp.ok) {
      navigate('/login');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">Reset a senha</h1>
      <Input label="Nova senha" type="passwordd" name="password" />
      <Button>Resetar</Button>
    </form>
  );
}

export default LoginPasswordReset;
