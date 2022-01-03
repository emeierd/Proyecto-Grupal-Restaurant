import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Loginform = () => {

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formEl = e.target.closest('form');
        const formData = new FormData(formEl);
        const entries = {};
        for (let [key, value] of formData.entries()) entries[key] = value.trim();

        try {
            const res = await axios.post('/api/user/login', entries);
            navigate('/home', { state: { _id: res.data.user._id } })
        } catch (err) {
            console.error(err);
            alert("Error, try again")
        }
    }
    return (
        <form onSubmit={onSubmit} className='login'>
            <label htmlFor='email'>Email</label>
            <input type="email" id="emailLog" name="email" />
            <label htmlFor='password'>Password</label>
            <input type="password" id="passwordLog" name="password" />
            <button>Login</button>
        </form>
    );
}

export default Loginform;
