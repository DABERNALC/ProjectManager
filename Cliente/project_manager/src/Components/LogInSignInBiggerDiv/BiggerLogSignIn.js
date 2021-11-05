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
    let [email, setEmail] = useState("nicoFake@gmail.com")
    let [contra, setContra] = useState("123123")

    let [name, setName] = useState("nico")
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
                                <p style={{ color: "red" }}>{props.error}</p>
                                :
                                null
                        }
                        {
                            props.mode == "signUp" ?
                                <div>
                                    <h3 className={BiggerLogSignInStyle.h3}>Name:</h3>
                                    <input value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}></input>
                                </div> :
                                null
                        }

                        <div>
                            <h3 className={BiggerLogSignInStyle.h3}

                            >Email:</h3>
                            <input value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}></input>
                        </div>
                        <div>
                            <h3 className={BiggerLogSignInStyle.h3}>Contraseña:</h3>
                            <input type="password"
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
                                    <input type="password"
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
                                <Spinner />
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
                                > {props.mode == "signUp" ? "Registrarse" : "Iniciar sesion"}</button>
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