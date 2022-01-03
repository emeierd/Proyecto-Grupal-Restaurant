import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = ({name, back}) => {
    const navigate = useNavigate();
    
    const backHandler = async (e) => {
        e.preventDefault();
        try {
            console.log(back)
            navigate(-1);
        } catch (err) {
            console.error(err);
            navigate('/')
        }
    }

    const logout = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/user/logout');
            console.log(res);
            navigate('/')
        } catch (err) {
            console.error(err);
            alert("Error, try again")
        }
    }
    return (
        <div className='header'>
            {back? <button onClick={backHandler}>Back</button> : null}
            <h2>Hola, {name}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Header;