import * as actionTypes from "../Actions/ActionTypes"

const initialState = {
    color: "",
    id: "",
    name: "",
    proyects: [],
    teams: [],
}

const login = (state, payload) => {
    return payload;
}
const loading = (state, payload) => {
    return payload;
}


const reducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case actionTypes.LOGIN:
            return login(state, payload);
        case actionTypes.LOADING:
            return loading(state,payload)
        case actionTypes.ERROR:
            return loading(state,payload)
        default:
            return state;
    }
};

export default reducer;