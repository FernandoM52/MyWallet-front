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

const apiExtract = { getExtract };
export default apiExtract;