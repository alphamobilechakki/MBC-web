import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // ✅ Vite env variable 
    timeout : 3000,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); 
        console.log(token,"tokennnnnnnnnn")
        if (token) {
            config.headers["Authorization"] = `bearer ${token}`;
            if(config.data instanceof FormData){ 
                config.headers["content-type"] = "multipart/form-data";

            }
        } else {
            config.headers["content-type"] = "application/json"
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
        
        } else {
            
            return Promise.reject(error);
        }
    }
)


export default api;