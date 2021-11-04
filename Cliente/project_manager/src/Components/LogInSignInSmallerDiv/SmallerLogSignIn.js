import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import SmallerLogSignInStyle from "./SmallerLogSignInStyle.module.css"
const SmallerLogSignIn = (props) => {
    const history = useHistory()
    const redirect = ()=>{
        if(props.mode == "signIn")
        {
            history.push("/signUp")
            
        }else{
            history.push("/signIn")
        }
    }
    return (
        <div className={SmallerLogSignInStyle.leftDiv}>
            <div className={SmallerLogSignInStyle.innerDiv}>
                <h2 className={SmallerLogSignInStyle.title}>{props.title}</h2>
                <button className={SmallerLogSignInStyle.button} onClick={redirect}>{props.buttonText}</button>
            </div>

        </div>
    )
}
export default SmallerLogSignIn;