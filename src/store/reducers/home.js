import * as Types from "../action-types"
let initState = {
    currontLesson: "all"
}
function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLess: action.lesson}
    }
    return state;
}
export default home