import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/RegisterInput';
import { register } from '../utils/api';

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
  return (
    <>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Kembali ke <Link to='/'>Login</Link>
      </p>
    </>
  );
}

export default RegisterPage;
