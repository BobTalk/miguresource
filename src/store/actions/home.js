import * as Types from "../action-types"
let actions = {
    updateCurrentLesson(lesson){
        return {type: Types.SET_CURRENT_LESSON, lesson}
    }
}
export  default  actions;