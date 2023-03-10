import axios from "axios";

export const hostApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});