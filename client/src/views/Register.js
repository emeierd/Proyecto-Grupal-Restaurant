import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    return (
        <div className='register-wrapper'>
            <RegisterForm/>
            <LoginForm/>
        </div>
    );
}

export default Register;
