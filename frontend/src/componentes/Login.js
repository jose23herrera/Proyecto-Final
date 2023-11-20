import React, { useEffect, useState } from "react";
import '../App.css';

const Login = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    };

    const handleShowRegisterForm = () => {
        setShowLoginForm(false);
    };

    return (
        <div id="loginContainer" classNameName="animated">
            <div className="tabButtons">
                <button className="tabButton" onclick={handleShowLoginForm}>Entrar</button>
                <button className="tabButton" onclick={handleShowRegisterForm}>Nuevo cliente</button>
            </div>
            <div id="loginForm" className="formContainer">
                <h3>Inicia sesión <span></span><span></span></h3>
                <form>
                    <label>Email*</label>
                    <input required type="email" />
                    <label>Contraseña*</label>
                    <input type="password" />
                    <button type="button">Iniciar sesión</button>
                    <div>¿Has olvidado tu contraseña?</div>
                </form>
            </div>
            <div id="registerForm" className="formContainer register-form">
                <h3>Crea tu cuenta</h3>
                <form>
                    <label>Nombre*</label>
                    <input required type="text" />
                    <label>Apellidos*</label>
                    <input required type="text" />
                    <label>Email*</label>
                    <input required type="email" />
                    <label>Contraseña*</label>
                    <input type="password" />
                    <button type="button">Registrarme</button>
                </form>
            </div>
        </div>
    )
};

export default Login;