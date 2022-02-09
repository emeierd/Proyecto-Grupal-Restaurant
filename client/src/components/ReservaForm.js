import React, { useState } from 'react';
import axios from 'axios';
import validation from './actions/validation'

const ReservaForm = ({ personas, turnoId }) => {
    const [nameValidation, setNameValidation] = useState({ valid: false, text: null });
    const [lastNameValidation, setLastNameValidation] = useState({ valid: false, text: null });
    const [emailValidation, setEmailValidation] = useState({ valid: false, text: null });
    
    const validate = (e) => {
        switch (e.target.name) {
            case "name":
                setNameValidation(validation(e.target.name, e.target.value));
                break;
            case "lastName":
                setLastNameValidation(validation(e.target.name, e.target.value));
                break;
            case "email":
                setEmailValidation(validation(e.target.name, e.target.value));
                break;
            default:
                return null;
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formEl = e.target.closest('form');
            const formData = new FormData(formEl);
            const entries = {};
            for (let [key, value] of formData.entries()) entries[key] = value.trim();
            entries.personas = personas;
            entries.turnoId = turnoId;
            console.log(entries)
        console.log(nameValidation.valid)
        if (nameValidation.valid && lastNameValidation.valid && emailValidation.valid) {
            try {
                const res = await axios.post('/api/reserva/create', entries);
                console.log(res);
                alert("Reservado!")
                e.target.reset();
            } catch (err) {
                console.error(err);
                alert("Error, try again")
            }
        } else {
            alert("Form doesn't match all requirements")
        }
    }

    return (
        <form className='register' onSubmit={onSubmit}>
            <div><label htmlFor='name'>Name</label> {nameValidation.text}</div>
            <input type="text" id="name" name="name" onChange={validate} />
            <div><label htmlFor='lastName'>Lastname</label> {lastNameValidation.text}</div>
            <input type="text" id="lastName" name="lastName" onChange={validate} />
            <div><label htmlFor='email'>Email</label> {emailValidation.text}</div>
            <input type="email" id="email" name="email" onChange={validate} />
            <button type='submit'>Reservar</button>
        </form>
    );
}

export default ReservaForm;