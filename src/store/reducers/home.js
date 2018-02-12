import * as Types from "../action-types"
let initState = {
    currentLesson: "all",
    /*轮播图*/
    sliders: [],
    lesson: {
        list: [],//课程所有数据
        hasMore: true,
        offset: 0,
        limit: 5,
        isLoading: false
    }
}
function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson: action.lesson}
        case Types.SET_SLIDERS:
            return {...state, sliders: action.payload}
        case  Types.CHANGE_ISLOADING_STATUS:
            return {...state, lesson: {...state.lesson, isLoading: action.status}}
        case Types.SET_LESSONS:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    isLoading: false,
                    offset: state.lesson.offset + action.payload.list.length,
                    hasMore: action.payload.hasMore,
                    list: [...state.lesson.list, ...action.payload.list]
                }
            }
        case Types.CLEAR_LESSONS:
            return {...state, lesson: {...state.lesson, isLoading: false, offset: 0, list: [], hasMore: true}}
    }
    return state;
}
export default home