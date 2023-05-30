import React, { useState, useRef } from 'react';
import validator from 'validator';

const PopupWithForm = (props) => {
    const [formErrors, setFormErrors] = useState({});
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    function handleRegisterSubmit(e) {
        e.preventDefault();
        emailRef.current.value = '';
        passwordRef.current.value = '';
        usernameRef.current.value = '';
        props.toggleRegisterSuccessPopup(true);
        props.toggleFormPopup(false);
        props.toggleRegisterSuccess(true);
    }

    function handleSigninSubmit(e) {
        e.preventDefault();
        emailRef.current.value = '';
        passwordRef.current.value = '';
        props.toggleLoggedIn(true);
        closePopup();
    }

    function validateInputs(email, password, username = null) {
        const errors = {};

        if (!email || !validator.isEmail(email)) {
            errors.email = 'Invalid email address';
        }

        if (!password) {
            errors.password = 'Password is a required field';
        } else if (!validator.isStrongPassword(password, { minSymbols: 0 })) {
            errors.password =
                'Password must be at least 8 characters and contain a number and a capital letter.';
        }

        if (username === null) {
            return errors;
        } else if (!username) {
            errors.username = 'Username is a required field.';
        } else if (username.length < 6) {
            errors.username = 'Username must be at least 6 characters';
        }

        return errors;
    }

    function handleFormOnChange() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = usernameRef.current?.value || null;

        const validatedInputs = validateInputs(email, password, username);
        setFormErrors(validatedInputs);
    }

    function closePopup() {
        props.togglePopup(false);
        props.toggleFormPopup(false);
    }

    function handleTogglePopup() {
        props.toggleIsRegisterPopup(!props.isRegisterPopup);
    }

    function handleSignin() {
        props.toggleLoggedIn(true);
        closePopup();
    }

    function renderForm() {
        const { isRegisterPopup } = props;
        const formType = isRegisterPopup ? 'Sign up' : 'Sign in';

        return (
            <>
                <h2 className='popup__title'>{formType}</h2>
                <form
                    onChange={handleFormOnChange}
                    onSubmit={isRegisterPopup ? handleRegisterSubmit : handleSigninSubmit}
                    className={`popup__form popup__form_${isRegisterPopup ? 'register' : 'signin'} form`}
                >
                    <label className='form__label' htmlFor='register-email'>
                        Email
                    </label>
                    <input
                        className='form__input'
                        type='email'
                        id='register-email'
                        ref={emailRef}
                        placeholder='Enter Email'
                        required
                    />
                    {formErrors.email && <span className='form__error'>{formErrors.email}</span>}

                    <label className='form__label' htmlFor='register-password'>
                        Password
                    </label>
                    <input
                        className='form__input'
                        type='password'
                        id='register-password'
                        ref={passwordRef}
                        placeholder='Enter Password'
                        required
                    />
                    {formErrors.password && <span className='form__error'>{formErrors.password}</span>}

                    {isRegisterPopup && (
                        <>
                            <label className='form__label' htmlFor='register-username'>
                                Username
                            </label>
                            <input
                                className='form__input'
                                type='text'
                                id='register-username'
                                ref={usernameRef}
                                placeholder='Enter your Username'
                                required
                            />
                            {formErrors.username && <span className='form__error'>{formErrors.username}</span>}
                        </>
                    )}

                    <button
                        type='submit'
                        className={`popup__submit ${Object.keys(formErrors).length === 0 ? 'popup__submit_active' : ''}`}
                    >
                        {formType}
                    </button>
                </form>

                <p className='popup__form-text'>
                    or&nbsp;
                    <button onClick={handleTogglePopup} className='popup__form-button'>
                        {isRegisterPopup ? 'Sign in' : 'Sign up'}
                    </button>
                </p>
            </>
        );
    }

    return <>{props.isFormPopupOpen ? renderForm() : null}</>;
};

export default PopupWithForm;
