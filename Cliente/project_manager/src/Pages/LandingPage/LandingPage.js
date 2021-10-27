import React, { Component } from 'react'
import LandingPageStyle from "./LandingPageStyle.module.css"
    
const LandingPage = () => {
    return (
        <div className="center-fullScreen">
            <div className={LandingPageStyle.upperContainer}>
                <div className={LandingPageStyle.leftUpperPart}>
                    <p className={LandingPageStyle.tittleName}>P.A.T.O</p>
                </div>
                <div className={LandingPageStyle.rightUpperPart}>
                    <div className={LandingPageStyle.inlinePart}>
                        <p className={LandingPageStyle.logInText}>Inicia sesión</p>
                        <div className={LandingPageStyle.estiloBotonDiv}>
                            <button className={LandingPageStyle.estiloBoton}>Regístrate</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className={LandingPageStyle.welcomeText}>Realiza tus proyectos con <br />‘P.A.T.O’</h1>
            <p className={LandingPageStyle.welcomeInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className={LandingPageStyle.bottomButton}>
                <div className={LandingPageStyle.estiloBotonDiv}>
                    <button className={LandingPageStyle.estiloBoton}>Regístrate</button>
                </div>
            </div>
        </div>
    )
}
export default LandingPage
