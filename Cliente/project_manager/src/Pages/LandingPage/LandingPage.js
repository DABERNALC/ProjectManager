import React, { Component } from 'react'
import LandingPageStyle from "./LandingPageStyle.module.css"
import {Link, link} from "react-router-dom"
import imagen from './images/PatoLogo.png'
import NewTeam from '../../Components/NewTeam/NewTeam'

const LandingPage = () => {
    return (
        <div className="center-fullScreen">
            <div className={LandingPageStyle.upperContainer}>
                <div className={LandingPageStyle.leftUpperPart}>
                <img className={LandingPageStyle.logo} src={imagen}></img>
                </div>
                <div className={LandingPageStyle.rightUpperPart}>
                    <div className={LandingPageStyle.inlinePart}>
                        <Link to="signIn"><p className={LandingPageStyle.logInText}>Inicia sesión</p></Link>   
                        <div className={LandingPageStyle.estiloBotonDiv}>
                            <Link className={LandingPageStyle.estiloBoton} to="/signUp">Regístrate</Link>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className={LandingPageStyle.welcomeText}>Realiza tus proyectos con <br />PATO</h1>
            <p className={LandingPageStyle.welcomeInfo}>PATO (Project Administrator Tool for Organization) te brinda las herramientas para poder organizarte con tu equipo de trabajo y desarrollar varios proyectos ¿Qué estás esperando? ¡Regístrate!</p>
            <div className={LandingPageStyle.bottomButton}>
                <div className={LandingPageStyle.estiloBotonDiv}>
                    <Link className={LandingPageStyle.estiloBoton} to="/signUp">Regístrate</Link>
                </div>
            </div>
            
        </div>
    )
}
export default LandingPage
