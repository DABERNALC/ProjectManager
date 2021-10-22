import React from 'react'
import BiggerLogSignInStyle from "./BiggerLogSignInStyle.module.css";

const BiggerLogSignIn = () => {

    return (
        <div className={BiggerLogSignInStyle.container}>
            <form>
                <div className={BiggerLogSignInStyle.formStyle}>
                    <h3>Email:</h3>
                    <input></input>
                    <h3>Contraseña:</h3>
                    <input type="password"></input>
                </div>
                <div className={BiggerLogSignInStyle.buttonDiv}>
                    <button className={BiggerLogSignInStyle.LogInButton}>iniciar sesión</button>
                </div>
            </form>
        </div>
    )
}
export default BiggerLogSignIn;