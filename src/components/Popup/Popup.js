import React, { useState, useEffect } from 'react';
import validator from 'validator';
import './Popup.css';


const FormField = ({ label, type, placeholder, value, onChange, errorMessage }) => (
    <>
        <label className="popup__label">{label}</label>
        <input className="popup__input" type={type} placeholder={placeholder} value={value} onChange={onChange} required />
        {errorMessage && <span className="popup__error">{errorMessage}</span>}
    </>
);

const SignInForm = ({ onSubmit, changePopupType }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const emailValid = email && validator.isEmail(email);
        const passwordValid = password && password.length >= 6;
        setEmailError(emailValid ? '' : email ? 'Invalid email address.' : '');
        setPasswordError(passwordValid ? '' : password ? 'Password should be at least 6 characters.' : '');
        setIsValid(emailValid && passwordValid);
    }, [email, password]);

    return (
        <form className="popup__form" onSubmit={onSubmit}>
            <h3 className="popup__title">Sign in</h3>
            <FormField label="Email" type="email" placeholder="Enter email" minLength="7" value={email} onChange={e => setEmail(e.target.value)} errorMessage={emailError} />
            <FormField label="Password" type="password" placeholder="Enter password" minLength="5" value={password} onChange={e => setPassword(e.target.value)} errorMessage={passwordError} />
            <button type="submit" className={`popup__submit ${isValid ? "" : "popup__submit_disabled"}`} disabled={!isValid}>Sign in</button>
            <p className="popup__change-type">
                or
                <button className="popup__link" type="button" onClick={() => changePopupType('signUp')}>
                    Sign up
                </button>
            </p>
        </form>
    );
};

const SignUpForm = ({ onSubmit, changePopupType, errorMessage }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const emailValid = email && validator.isEmail(email);
        const passwordValid = password && password.length >= 6;
        const usernameValid = name && name.length >= 4;
        setEmailError(emailValid ? '' : email ? 'Invalid email address.' : '');
        setPasswordError(passwordValid ? '' : password ? 'Password should be at least 6 characters.' : '');
        setUsernameError(usernameValid ? '' : name ? 'Username should be at least 4 characters.' : '');
        setIsValid(emailValid && passwordValid && usernameValid);
    }, [email, password, name]);

    return (
        <form className="popup__form" onSubmit={(e) => onSubmit(e, email, password, name)}>
            <h3 className="popup__title">Sign up</h3>
            <FormField label="Email" type="email" placeholder="Enter email" minLength="7" value={email} onChange={e => setEmail(e.target.value)} errorMessage={emailError} />
            <FormField label="Password" type="password" placeholder="Enter password" minLength="5" value={password} onChange={e => setPassword(e.target.value)} errorMessage={passwordError} />
            <FormField label="Username" type="text" placeholder="Enter your username" minLength="2" value={name} onChange={e => setName(e.target.value)} errorMessage={usernameError} />
            {errorMessage && <span className="popup__error">{errorMessage}</span>}
            <button type="submit" className={`popup__submit ${isValid ? "" : "popup__submit_disabled"}`} disabled={!isValid}>Sign up</button>
            <p className="popup__change-type">
                or
                <button className="popup__link" type="button" onClick={() => changePopupType('signIn')}>
                    Sign in
                </button>
            </p>
        </form>
    );
};

const SuccessMessage = ({ changePopupType }) => (
    <>
        <form className="popup__form" >
            <h3 className="popup__title">Registration successfully completed!</h3>
            <p className="popup__change-type"><span className="popup__link" onClick={() => changePopupType('signIn')}>Sign in</span></p>
        </form>
    </>
);

const Popup = ({ isOpen, popupType, handleSignin, handleSignup, handlePopup, changePopupType, signupError}) => {

    const formComponent = () => {
        switch (popupType) {
            case 'signIn':
                return <SignInForm onSubmit={handleSignin} changePopupType={changePopupType} />;
            case 'signUp':
                return <SignUpForm onSubmit={handleSignup} changePopupType={changePopupType} errorMessage={signupError} />
            case 'Success':
                return <SuccessMessage changePopupType={changePopupType} />;
            default:
                return null;
        }
    };

    const handleOutsideClick = () => {
        handlePopup();
    }

    const handleInsideClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`popup ${isOpen ? `popup_visible` : ''}`} onClick={handleOutsideClick}>
            <div className="popup__container" onClick={handleInsideClick}>
                <button className="popup__close-button" onClick={handlePopup} />
                {formComponent()}
            </div>
        </div>
    );
};

export default Popup;