import React, { useState } from 'react'
import BiggerLogSignInStyle from "./BiggerLogSignInStyle.module.css";
import axiosFirebaseAuth from "../../Axios/firebaseAuth"
import axiosApi from "../../Axios/api"

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
        axiosFirebaseAuth.post(":signUp", data)
            .then((response) => {
                const participantId = response.data.localId
                const params = new URLSearchParams();
                params.append('color', "purple");
                params.append('correo', email);
                params.append('id', participantId);
                params.append('nombre', name);


                const apiData = {
                    body:{
                        color:"purple",
                        correo:email,
                        id:participantId,
                        nombre:name
                    }
                    
                }
                setLoading(false);
                axiosApi.post("/teams/createParticipant",params).then((resp)=>{
                    console.log(resp.data);
                    //se guardo correctamente en la bd
                    history.push('/signIn');
                }).catch((e)=>{
                    console.log(e.response.data);
                })
                console.log("response: ", response.data.localId);
            })
            .catch((e) => {
                setLoading(false);
                let error = e.response.data.error.message;
                setError(error)
                console.log(e.response.data.error.message);

            });

    }
    const logIn = () => {
        let data = {
            email: email,
            password: contra,
            returnSecureToken: true
        }
        setLoading(true);
        axiosFirebaseAuth.post(":signInWithPassword", data)
            .then((response) => {
                const participantId = response.data.localId
                


                
                
                // console.log("response: ", response.data.localId);
                //solicitud a la api
                axiosApi.get(`/teams/logIn?participantId=${participantId}`).then((resp)=>{
                    setLoading(false);
                    console.log("ok");
                    console.log(resp.data);
                    //se guardo correctamente en la bd
                    //history.push('/signIn');
                }).catch((e)=>{
                    setLoading(false);
                    console.log('error pa');
                    console.log('error', Object.getOwnPropertyNames(e) );
                })
                
            })
            .catch((e) => {
                setLoading(false);
                let error = e.response.data.error.message;
                setError(error)
                console.log(e.response.data.error.message);

            });

    }




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
export default BiggerLogSignIn;