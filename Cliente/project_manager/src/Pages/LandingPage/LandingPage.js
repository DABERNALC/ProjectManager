import React, { Component } from 'react'
import LandingPageStyle from "./LandingPageStyle.module.css"
import GenericButton from '../../Components/GenericButton/GenericButton'

const LandingPage = () => {
    return (
        <div>
            <div className={LandingPageStyle.upperContainer}>
                <div className={LandingPageStyle.leftUpperPart}>
                    <p className={LandingPageStyle.tittleName}>Gestor de proyectos</p>
                </div>
                <div className={LandingPageStyle.rightUpperPart}>
                    <div className={LandingPageStyle.inlinePart}>
                        <p className={LandingPageStyle.logInText}>Inicia sesión</p>
                        <GenericButton />
                    </div>
                </div>
            </div>
            <h1 className={LandingPageStyle.welcomeText}>Realiza tus proyectos con <br />‘Gestor de proyectos’</h1>
            <p className={LandingPageStyle.welcomeInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className={LandingPageStyle.bottomButton}>
                <GenericButton />
            </div>
        </div>
    )
}
export default LandingPage
