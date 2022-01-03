import React, { useState } from 'react';
import axios from 'axios';
import validation from './actions/validation'

const Registerform = () => {
    const [nameValidation, setNameValidation] = useState({ valid: false, text: null });
    const [lastNameValidation, setLastNameValidation] = useState({ valid: false, text: null });
    const [emailValidation, setEmailValidation] = useState({ valid: false, text: null });
    const [passwordValidation, setPasswordValidation] = useState({ validation: { valid: false, text: null }, pass: null });
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({ validation: { valid: false, text: null }, pass: null });


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
            case "password":
                setPasswordValidation(validation(e.target.name, e.target.value));
                const pass = confirmPasswordValidation.pass
                if (e.target.value === confirmPasswordValidation.pass) {
                    setConfirmPasswordValidation({ validation: { valid: true, text: null }, pass: pass });
                } else {
                    setConfirmPasswordValidation({ validation: { valid: false, text: <p>Passwords don't match</p> }, pass: pass });
                    console.log(confirmPasswordValidation.validation.text)
                }
                break;
            case "confirmPassword":
                if (e.target.value === passwordValidation.pass) {
                    setConfirmPasswordValidation({ validation: { valid: true, text: null }, pass: e.target.value });
                } else {
                    setConfirmPasswordValidation({ validation: { valid: false, text: <p>Passwords don't match</p> }, pass: e.target.value });
                }
                break;
            default:
                return null;    
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(nameValidation.valid)
        if (nameValidation.valid && lastNameValidation.valid && emailValidation.valid &&
            passwordValidation.validation.valid && confirmPasswordValidation.validation.valid) {
            const formEl = e.target.closest('form');
            const formData = new FormData(formEl);
            const entries = {};
            for (let [key, value] of formData.entries()) {
                if (key !== "confirmPassword") entries[key] = value.trim();
            }
            console.log(entries)

            try {
                const res = await axios.post('/api/user/createUser', entries);
                console.log(res);
                alert("User created!")
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
            <div><label htmlFor='password'>Password</label> {passwordValidation.validation.text}</div>
            <input type="password" id="password" name="password" onChange={validate} />
            <div><label htmlFor='confirmPassword'>Confirm Password</label> {confirmPasswordValidation.validation.text}</div>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={validate} />
            <button>Registrar</button>
        </form>
    );
}

export default Registerform;
