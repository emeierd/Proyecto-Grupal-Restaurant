import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const Home = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            try {
                const userDb = await axios.get('/api/user/get/' + state._id);
                if (userDb.status !== 200) {
                    navigate('/')
                }
                setUser(userDb.data.user);
            } catch (err) {
                console.error(err);
                navigate('/')
            }
        }
        getUser();
    }, [state]);

    return (
        <>
          <Header name={user.name}/>
          Home  
        </>
    );
}

export default Home;
