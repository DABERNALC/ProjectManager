import React, { useEffect, useState } from 'react'
import LogInStyle from "./LogInStyle.module.css"
import SmallerLogSignIn from "../../Components/LogInSignInSmallerDiv/SmallerLogSignIn"
import BiggerLogSignIn from "../../Components/LogInSignInBiggerDiv/BiggerLogSignIn"

const LogIn = (props) => {
    let [title, setTitle] = useState("")
    let [buttonText, setButtonText] = useState("")
    useEffect(() => {
        if (props.mode == "signIn") {
            setTitle("¿Eres nuevo?")
            setButtonText("Regístrate")
        }
        if (props.mode == "signUp") {
            setTitle("¿Ya tienes cuenta?")
            setButtonText("Inicia sesión")
        }
    }, [])
    return (
        <div className={LogInStyle.centered + " center-fullScreen"}>
            <div className={LogInStyle.container}>
                {
                    props.mode == "signIn" ?
                        <>
                            <SmallerLogSignIn title={title}
                                buttonText={buttonText}
                            />
                            <BiggerLogSignIn 
                            mode="signIn"
                            />
                        </> :
                        <>

                            <BiggerLogSignIn mode="signUp"/>
                            <SmallerLogSignIn title={title}
                                buttonText={buttonText}
                            />
                        </>
                }

            </div>
        </div>
    )

}
export default LogIn;