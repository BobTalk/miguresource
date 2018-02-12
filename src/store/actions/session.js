import * as Types from "../action-types"
import {register} from "../../api/session"
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
    }
}
export  default  actions