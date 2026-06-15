import axios from "axios";

export const baseUrl = axios.create({
    baseURL: "https://apicleantemplate.codedonor.in/api/"
})
