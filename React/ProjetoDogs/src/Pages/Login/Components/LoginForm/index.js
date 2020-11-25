import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../../../api';
import Button from '../../../../Components/Form/Button';
import Input from '../../../../Components/Form/Input';
import useForm from '../../../../Hooks/useForm';
import { UserContext } from '../../../../UserContext';
import styles from './loginForm.module.css';

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.validate() && !password.validate()) return false;
    userLogin(username.value, password.value);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" type="text" label="Usuário" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}

export default LoginForm;
