import axios from "./index"
/*注册接口*/
export function register(username, password) {
    return axios.post("/register", {username, password})
}