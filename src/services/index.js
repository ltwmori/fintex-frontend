import axios from "axios";

export default class HttpClient {
    constructor (){
        this.client = axios.create ({
            baseURL: "https://localhost:7212/", 
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.client.interceptors.request.use(config => {
            // console.log('Request: ', config);
            return config;
          }, err => Promise.reject(err),
        );
    }
    
}