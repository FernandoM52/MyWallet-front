import axios from "axios";

function createConfig(token) {
    return {
        headers: { Authorization: `Bearer ${token}` }
    }
}

function getExtract(token) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, createConfig(token));
    return promise;
}

/*function newTransaction(body, token) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/nova-transacao/:tipo`, body, createConfig(token));
    return promise;
}*/

const apiTransaction = { getExtract };
export default apiTransaction;