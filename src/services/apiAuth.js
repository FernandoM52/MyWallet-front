import axios from "axios";

function signup(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, body);
    return promise;
}

function login(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/logar`, body);
    return promise;
}

const apiAuth = { signup, login };
export default apiAuth;