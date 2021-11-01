import * as actionTypes from "./ActionTypes"
import axiosFirebaseAuth from "../../Axios/firebaseAuth"
import axiosApi from "../../Axios/api"
import { useHistory } from "react-router";

const { LOGIN, LOADING,ERROR} = actionTypes;

const login = (payload) => {
    return {
        type: LOGIN,
        payload: { ...payload,
            loading: false,
            error:  ""
        }
    }
}
const signUp = () => {
    return {
        type: LOGIN,
        payload: {
            color: "",
            id: "",
            name: "",
            proyects: [],
            teams: [],
            loading: false,
            error:  ""
        }
    }
}
const setLoadign = () => {
    return {
        type: LOADING,
        payload: {
            color: "",
            id: "",
            name: "",
            proyects: [],
            teams: [],
            loading: true,
            error:  ""
        }
    }
}
const setError = (payload) => {
    return {
        type: ERROR,
        payload: {
            color: "",
            id: "",
            name: "",
            proyects: [],
            teams: [],
            loading: false,
            error:  payload
        }
    }
}

export const loginRequest = (payload) => {    
    return (dispatch) => {
        dispatch(setLoadign())
        console.log("data");
        const data = payload
        axiosFirebaseAuth.post(":signInWithPassword", data)
            .then((response) => {
                const participantId = response.data.localId
                // console.log("response: ", response.data.localId);
                //solicitud a la api
                axiosApi.get(`/teams/logIn?participantId=${participantId}`).then((resp) => {
                    //setLoading(false);
                    console.log("jeje",resp.data.data);
                    dispatch(login(resp.data.data));
                    
                    //se guardo correctamente en la bd
                    //history.push('/signIn');
                }).catch((e) => {
                    //setLoading(false);
                    console.log('error pa');
                    console.log('error', Object.getOwnPropertyNames(e));
                })
            })
            .catch((e) => {
                //setLoading(false);
                let error = e.response.data.error.message;
                //setError(error)
                console.log(e.response.data.error.message);
                dispatch(setError(error))

            });
    }
}

export const signUpRequest = (payload) => {    
    return (dispatch) => {
        dispatch(setLoadign())
        
        const firebaseData = payload.firebaseData
        const apiData = payload.apiData    
        axiosFirebaseAuth.post(":signUp", firebaseData)
            .then((response) => {
                const participantId = response.data.localId
                const params = new URLSearchParams();
                var randomColor = ["Red","Pink","Coral","Gold","Violet","Purple","Lime","Green","Teal","Aqua","Blue","Peru","Black"];
                var randomColor = randomColor[Math.floor(Math.random()*randomColor.length)];
                params.append('color', randomColor);
                params.append('correo', apiData.email);
                params.append('id', participantId);
                params.append('nombre', apiData.name);

                
                axiosApi.post("/teams/createParticipant",params).then((resp)=>{
                    console.log(resp.data);
                    //se guardo correctamente en la bd
                    dispatch(signUp())
                }).catch((e)=>{
                    console.log(e.response.data);
                })
                
            })
            .catch((e) => {
                let error = e.response.data.error.message;
                dispatch(setError(error))
                console.log(e.response.data.error.message);

            });
    }
}