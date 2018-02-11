import * as Types from "../action-types"
let initState = {
    currontLesson: "all",
    /*轮播图*/
    sliders: [],
    lesson: {
        list: [],//课程所有数据
        hasMore: true,
        offset: 0,
        limit: 5
    }
}
function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLess: action.lesson}
        case Types.SET_SLIDERS:
            return {...state, sliders: action.payload}
        case  Types.SET_LESSONS:
            return {...state, lesson:}
    }
    return state;
}
export default home