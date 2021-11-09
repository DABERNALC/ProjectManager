import React, { useEffect, useState } from 'react'
import BiggerLogSignInStyle from "./BiggerLogSignInStyle.module.css";
import axiosFirebaseAuth from "../../Axios/firebaseAuth"
import axiosApi from "../../Axios/api"
import { connect } from 'react-redux';
import * as actionCreators from "../../Store/Actions/UserInfo";
import axios from "axios"
import Spinner from '../Spinner/Spinner';
import { useHistory } from 'react-router-dom'


const BiggerLogSignIn = (props) => {
    let [email, setEmail] = useState("")
    let [contra, setContra] = useState("")

    let [name, setName] = useState("")
    let [loading, setLoading] = useState(false)
    const history = useHistory();


    const createFirebaseUser = () => {
        let firebaseData = {
            email: email,
            password: contra,
            returnSecureToken: true
        }
        let apiData = {
            email: email,
            name: name
        }
        let data = {
            firebaseData: firebaseData,
            apiData: apiData
        }
        props.signUp(data);
        
        
    }
    const logIn = async () => {

        let data = {
            email: email,
            password: contra,
            returnSecureToken: true
        }
        setLoading(true);
        await props.logIn(data);

    }
    useEffect(() => {
        console.log("aaaaaaa", props.loading);
        setLoading(props.loading)
    });
    useEffect(() => {
        // alert(props.loading)
        if (props.userId !== "" && props.loading === false) {
            console.log("entra");
            history.push("/app/teams");
        }
    }, [props.loading])



    return (
        <div className={BiggerLogSignInStyle.container}>
            <div className={BiggerLogSignInStyle.subContainer}>
                <form>
                    <div className={BiggerLogSignInStyle.formStyle}>
                        {
                            props.error != "" ?
                                <p style={{ color: "rgb(182, 37, 37)" }}>{props.error}</p>
                                :
                               // <p style={{ color: "green" }}>¡Inicia sesión!</p>
                               null
                        }
                        {
                            props.mode == "signUp" ?
                                <div>
                                    <h3 className={BiggerLogSignInStyle.h3}>Name:</h3>
                                    <input className = {BiggerLogSignInStyle.inputStyle} value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}></input>
                                </div> :
                                null
                        }

                        <div>
                            <h3 className={BiggerLogSignInStyle.h3}

                            >Email:</h3>
                            <input className = {BiggerLogSignInStyle.inputStyle} value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}></input>
                        </div>
                        <div>
                            <h3 className={BiggerLogSignInStyle.h3}>Contraseña:</h3>
                            <input className = {BiggerLogSignInStyle.inputStyle} type="password"
                                value={contra}
                                onChange={(e) => {
                                    setContra(e.target.value);
                                }}
                            ></input>
                        </div>
                        {
                            props.mode == "signUp" ?
                                <div>
                                    <h3 className={BiggerLogSignInStyle.h3}>Confirmar Contraseña:</h3>
                                    <input className = {BiggerLogSignInStyle.inputStyle} type="password"
                                        value={contra}
                                        onChange={(e) => {
                                            setContra(e.target.value);
                                        }}
                                    ></input>
                                </div> :
                                null
                        }
                    </div>
                    <div className={BiggerLogSignInStyle.buttonDiv}>
                        {
                            loading ?
                                <Spinner className={BiggerLogSignInStyle.spinnerStyle}/>
                                :
                                
                                <button className={BiggerLogSignInStyle.LogInButton}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (props.mode == "signUp") {
                                            createFirebaseUser()
                                        }
                                        else {
                                            logIn();
                                        }
                                    }}
                                > {props.mode == "signUp" ? "Registrarse" : "Iniciar sesión"}</button>
                        }

                    </div>

                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.UserInfo.loading,
        userId: state.UserInfo.id,
        error: state.UserInfo.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (payload) => dispatch(actionCreators.loginRequest(payload)),
        signUp: (payload) => dispatch(actionCreators.signUpRequest(payload))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BiggerLogSignIn);