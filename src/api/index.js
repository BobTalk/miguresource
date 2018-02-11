import  axios from "axios";
/*注  baseURL 不能写成baseURI*/
axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.response.use(function (res) {
    return res.data
});
export  default  axios;