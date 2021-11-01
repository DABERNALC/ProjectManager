import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  projectId: "",
  name: "",
  description: "",
  customer: "",
  teamId: "",
  loading: false,
  error: "",
};

const getTeam = (state, payload) => {
  return payload;
};
const loading = (state, payload) => {
  return payload;
};
const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case actionTypes.GET_PROJECT:
      return getTeam(state, payload);
    case actionTypes.LOADING_PROJECT:
      return loading(state, payload);
    default:
      return state;
  }
};

export default reducer;
