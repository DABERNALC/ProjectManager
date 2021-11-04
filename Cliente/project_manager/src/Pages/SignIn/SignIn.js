import React from 'react'
import SignInStyle from "./SignInStyle.module.css"

const SignIn = () => {
    return (
        <div >
            <div className={SignInStyle.container}>
                <BiggerLogSignIn />
                <SmallerLogSignIn />
            </div>
        </div>
    )

}
export default SignIn;