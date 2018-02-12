import  * as Types from "../action-types"
let initState = {
    user: null,
    msg: "",
    success: "",
    error: ""
}
function session(state = initState, action) {
    switch (action.type) {
        case Types.SET_USER_INFO:
            return {...action.user} //把获取的数据放到redux中
        case  Types.CLEAR_MESSAGE:
            return {...state, ...action.info}
    }
    return state
}

export default  session;