import React, { useEffect, useState } from 'react'
import LogInStyle from "./LogInStyle.module.css"
import SmallerLogSignIn from "../../Components/LogInSignInSmallerDiv/SmallerLogSignIn"
import BiggerLogSignIn from "../../Components/LogInSignInBiggerDiv/BiggerLogSignIn"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const LogIn = (props) => {
    let [title, setTitle] = useState("")
    let [buttonText, setButtonText] = useState("")
    const history = useHistory();

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
    let redirect = ()=>{
        history.push("/movido")

    }
    return (
        <div className={LogInStyle.centered + " center-fullScreen"}>
            <div className={LogInStyle.container}>
                {
                    props.mode == "signIn" ?
                        <>
                            <SmallerLogSignIn title={title}
                                buttonText={buttonText}
                                mode="signIn"
                            />
                            <BiggerLogSignIn 
                            mode="signIn"
                            />
                        </> :
                        <>

                            <BiggerLogSignIn mode="signUp"/>
                            <SmallerLogSignIn title={title}
                                mode="signUp"
                                buttonText={buttonText}
                            />
                        </>
                }
            </div>
        </div>
    )

}
export default LogIn;