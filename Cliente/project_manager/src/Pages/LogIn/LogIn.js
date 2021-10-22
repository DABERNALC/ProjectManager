import React from 'react'
import LogInStyle from "./LogInStyle.module.css"
import SmallerLogSignIn from "../../Components/LogInSignInSmallerDiv/SmallerLogSignIn"
import BiggerLogSignIn from "../../Components/LogInSignInBiggerDiv/BiggerLogSignIn"

const LogIn = () => {
    return (
        <div className={LogInStyle.centered}>
            <div className={LogInStyle.container}>
                <SmallerLogSignIn/>
                <BiggerLogSignIn/>
            </div>
        </div>
    )

}
export default LogIn;