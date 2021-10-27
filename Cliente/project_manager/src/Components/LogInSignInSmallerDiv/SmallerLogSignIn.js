import React from 'react'
import SmallerLogSignInStyle from "./SmallerLogSignInStyle.module.css"
const SmallerLogSignIn = () => {
    return (
        <div className={SmallerLogSignInStyle.leftDiv}>
            <div className={SmallerLogSignInStyle.innerDiv}>
                <h2 className={SmallerLogSignInStyle.title}>¿Eres nuevo?</h2>
                <button className={SmallerLogSignInStyle.button}>Regístrate</button>
            </div>

        </div>
    )
}
export default SmallerLogSignIn;