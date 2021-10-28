import axios from'axios';
const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
});
instance.defaults.params = {}
instance.defaults.params['key'] = 'AIzaSyDSYos2UVRwavOb0PcSFrllKgqv5jR_GPw';
export default instance;