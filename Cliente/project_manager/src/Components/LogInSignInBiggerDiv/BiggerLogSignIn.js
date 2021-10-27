import React, { useState } from 'react'
import BiggerLogSignInStyle from "./BiggerLogSignInStyle.module.css";
import axios from "axios"
import Spinner from '../Spinner/Spinner';
const BiggerLogSignIn = (props) => {
    let [email, setEmail] = useState("nicoFake@gmail.com")
    let [contra, setContra] = useState("123123")
    let [error, setError] = useState("")
    let [name, setName] = useState("nico")
    let [loading, setLoading] = useState(false)


    const firebaseKey = "AIzaSyDSYos2UVRwavOb0PcSFrllKgqv5jR_GPw"
    const createFirebaseUser = () => {
        const apiRoute = "http://localhost:8080/api/teams/createParticipant"
        let data = {
            email: email,
            password: contra,
            returnSecureToken: true
        }
        setLoading(true);
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSYos2UVRwavOb0PcSFrllKgqv5jR_GPw", data)
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
                axios.post(apiRoute,params).then((resp)=>{
                    console.log(resp.data);
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
                                    createFirebaseUser()
                                }}
                            >iniciar sesión</button>

                    }

                </div>

            </form>
        </div>
    )
}
export default BiggerLogSignIn;