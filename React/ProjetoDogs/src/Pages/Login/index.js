import React, { useContext } from 'react';
import LoginForm from './Components/LoginForm';
import LoginCreate from './Components/LoginCreate';
import LoginPasswordLost from './Components/LoginPasswordLost';
import LoginPasswordReset from './Components/LoginPasswordReset';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import styles from './login.module.css';
import NotFound from '../NotFound';

function Login() {
  const { isLogged } = useContext(UserContext);
  if (isLogged) return <Navigate to="/" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />{' '}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
