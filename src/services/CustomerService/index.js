import axios from "axios";

const { REACT_APP_SERVICE_URL } = process.env;

const instance = axios.create({
    baseURL: `${REACT_APP_SERVICE_URL}/api`,
});

export default instance;
