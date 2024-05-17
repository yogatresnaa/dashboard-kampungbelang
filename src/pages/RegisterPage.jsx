import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/RegisterInput';
// import { register } from '../utils/api';
import { register } from '../api';

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
  return (
    <div className='regisInput'>
      <RegisterInput register={onRegisterHandler} />
      <p className='log'>
        Kembali ke <Link to='/'>Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
