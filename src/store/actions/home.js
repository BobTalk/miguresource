import * as Types from "../action-types"
import {getSliders, getLessonsAll} from "../../api/home"
let actions = {
    /*更新当前选择的课程*/
    updateCurrentLesson(lesson){
        /*return {type: Types.SET_CURRENT_LESSON, lesson}*/
        return function (dispatch, getState) {
            dispatch({type: Types.SET_CURRENT_LESSON, lesson});
            actions.refreshAction()(dispatch, getState);
        }
    },
    /*轮播图*/
    getSlidersAction(){
        return function (dispatch, getState) { //redux-thunk
            dispatch({type: Types.SET_SLIDERS, payload: getSliders()})
            //redux-promise用法将payload的promise执行 执行后将内容放到action.payload中进行派发{type:"SET_SLIDERS",payload:[{},{},{}......]}
        }
    },
    getLessonsAction(){
        /*获取数据*/
        return function (dispatch, getState) {
            /*请求是需要判断是否有更多*/
            console.log(getState().home);
            let {currentLesson, lesson:{hasMore, offset, limit, isLoading}} = getState().home
            if (!hasMore || isLoading) { //isLoading 正在请求数据时 不加载
                return
            }
            //发送请求之前 状态改变
            dispatch({type: Types.CHANGE_ISLOADING_STATUS, status: true});
            //发请求
            dispatch({type: Types.SET_LESSONS, payload: getLessonsAll(offset, limit, currentLesson)})
        }
    },
    /*下拉刷新*/
    refreshAction(){
        return function (dispatch, getState) {
            dispatch({type: Types.CLEAR_LESSONS});
            actions.getLessonsAction()(dispatch, getState)

        }
    }
}
export  default  actions;