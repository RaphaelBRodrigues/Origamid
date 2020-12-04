import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';

export const UserContext = React.createContext(null);

function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [isLogged, setLogged] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLogged(false);
      setLoading(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const resp = await fetch(url, options);
    const json = await resp.json();
    setData(json);
    setLogged(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Ocorreu um erro ao realizar o login`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setLogged(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const resp = await fetch(url, options);
          if (!resp.ok) throw new Error('Token inválido');
          getUser(token);
        } catch (err) {
          console.error(err);
          setError(true);
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogged(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  const store = {
    userLogin,
    data,
    userLogout,
    error,
    isLogged,
    isLoading,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
}

export default UserStorage;
