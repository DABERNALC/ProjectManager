import React from 'react'
import SmallerLogSignInStyle from "./SmallerLogSignInStyle.module.css"
const SmallerLogSignIn = (props) => {
    return (
        <div className={SmallerLogSignInStyle.leftDiv}>
            <div className={SmallerLogSignInStyle.innerDiv}>
                <h2 className={SmallerLogSignInStyle.title}>{props.title}</h2>
                <button className={SmallerLogSignInStyle.button}>{props.buttonText}</button>
            </div>

        </div>
    )
}
export default SmallerLogSignIn;