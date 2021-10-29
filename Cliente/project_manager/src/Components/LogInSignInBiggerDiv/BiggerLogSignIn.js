import React, { useEffect, useState } from 'react'
import BiggerLogSignInStyle from "./BiggerLogSignInStyle.module.css";
import axiosFirebaseAuth from "../../Axios/firebaseAuth"
import axiosApi from "../../Axios/api"
import { connect } from 'react-redux';
import * as actionCreators from "../../Store/Actions/UserInfo";
import axios from "axios"
import Spinner from '../Spinner/Spinner';
import {useHistory} from 'react-router-dom'
const BiggerLogSignIn = (props) => {
    let [email, setEmail] = useState("nicoFake@gmail.com")
    let [contra, setContra] = useState("123123")
    let [error, setError] = useState("")
    let [name, setName] = useState("nico")
    let [loading, setLoading] = useState(false)
    const history = useHistory();


    const createFirebaseUser = () => {
        let data = {
            email: email,
            password: contra,
            returnSecureToken: true
        }
        setLoading(true);
        
    }
    const logIn = async() => {
        
        let data = {
            email: email,
            password: contra,
            returnSecureToken: true
        }

        setLoading(true);
        await props.logIn(data);
        history.push("/app/teams");
    }
    useEffect(()=>{
        console.log("aaaaaaa",props.loading);
        setLoading(props.loading)
    });



    return (
        <div className={BiggerLogSignInStyle.container}>

            <form>
                <div className={BiggerLogSignInStyle.formStyle}>
                    {
                        error != "" ?
                            <p style={{ color: "red" }}>{error}</p>
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
                                        if(props.mode == "signUp")
                                        {
                                            createFirebaseUser()
                                        }
                                        else
                                        {
                                            logIn();
                                            
                                        }
                                    }}
                                >Registrarse</button>
                            


                    }

                </div>

            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.UserInfo.loading
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      logIn: (payload) => dispatch(actionCreators.loginRequest(payload)),
      
    };
  };
export default  connect(mapStateToProps,mapDispatchToProps)(BiggerLogSignIn) ;