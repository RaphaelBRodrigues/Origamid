import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../Components/Form/Button';
import Input from '../../../../Components/Form/Input';
import useForm from '../../../../Hooks/useForm';
import { UserContext } from '../../../../UserContext';
import styles from './loginForm.module.css';
import buttonStyles from '../../../../Components/Form/Button/button.module.css';
import Error from '../../../../Components/Helper/Error/';

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, isLoading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username.validate() && !password.validate()) return false;
    userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" type="text" label="Usuário" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        {!isLoading ? (
          <Button>Entrar</Button>
        ) : (
          <Button disabled>Carregando...</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <button className={buttonStyles.button}>
          <Link to="/login/criar">Cadastro</Link>
        </button>
      </div>
    </section>
  );
}

export default LoginForm;
