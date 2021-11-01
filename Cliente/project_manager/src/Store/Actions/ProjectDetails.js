import * as actionTypes from "./ActionTypes";
import axiosFirebaseAuth from "../../Axios/firebaseAuth";
import axiosApi from "../../Axios/api";
import { useHistory } from "react-router";

const { LOADING_PROJECT, ERROR_PROJECT, GET_PROJECT } = actionTypes;

const getTeam = (payload) => {
  return {
    type: GET_PROJECT,
    payload: { ...payload, loading: false, error: "" },
  };
};
const setLoadign = () => {
  return {
    type: LOADING_PROJECT,
    payload: {
      projectId: "",
      name: "",
      description: "",
      customer: "",
      teamId: "",
      loading: true,
      error: "",
    },
  };
};
const setError = (payload) => {
  return {
    type: ERROR_PROJECT,
    payload: {
      projectId: "",
      name: "",
      description: "",
      customer: "",
      teamId: "",
      loading: true,
      error: payload,
    },
  };
};
export const getTeamRequest = (payload) => {
  return (dispatch) => {
    dispatch(setLoadign());
    axiosApi
      .get(`/projects/getProject?projectId=${payload.projectId}`)
      .then((resp) => {
        //setLoading(false);
        console.log("the team", resp.data);
        dispatch(getTeam(resp.data.data));

        //se guardo correctamente en la bd
        //history.push('/signIn');
      })
      .catch((e) => {
        //setLoading(false);

        let error = e.response.data.error.message;

        dispatch(setError(error));
      });
  };
};
