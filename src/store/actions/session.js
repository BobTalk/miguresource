import * as Types from "../action-types"
import {register, loginA} from "../../api/session"
let actions = {
    registerAction(username, password, history){
        return function (dispatch, getState) {
            register(username, password).then(function (data) {
                dispatch({type: Types.SET_USER_INFO, user: data})
                if (data.error === 0) {
                    history.push("/login")
                }

            })
        }
    },
    clearMessage(){
        return {type: Types.CLEAR_MESSAGE, info: {msg: "", success: "", error: 0}}
    },
    loginAction(username, password, history){
        alert("login 2222")
        return function (dispatch, getState) {
            //return函数是否执行 需要查看组件connect是否有调用
            loginA(username, password).then(function (data) {
                dispatch({type: Types.SET_USER_INFO, user: data})
                if (data.error === 0) {
                    history.push("/profile") //成功跳转
                }
            })
        }
    }
}
export  default  actions