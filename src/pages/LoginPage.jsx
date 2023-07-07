import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../component/LoginInput';
import { login } from '../utils/api';

function LoginPage({ loginSuccess, id }) {
  async function onLogin({ username, password }) {
    const { error, data } = await login({ username, password });

    if (!error) {
      loginSuccess(data, id);
    }
  }
  return (
    <div>
      <LoginInput login={onLogin} />
      <p>
        Belum Registrasi ? <Link to='/registrasi'>Registrasi di sini. </Link>
      </p>
    </div>
  );
}
export default LoginPage;
