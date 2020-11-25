import React from 'react';
import LoginForm from './Components/LoginForm';
import LoginCreate from './Components/LoginCreate';
import LoginPasswordLost from './Components/LoginPasswordLost';
import LoginPasswordReset from './Components/LoginPasswordReset';
import { Routes, Route } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
