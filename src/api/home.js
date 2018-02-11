/*获取轮播图*/
import axios from "./index"
//每个接口返回的都是promise
export function getSliders() {
    return axios.get("/sliders")
}
/*
 获取所有课程
 * params:offset
 * params: limit
 * params: type
 * */
export function getLessonsAll(offset, limit, type) {
    return axios.get(`/lessons/${offset}/${limit}/${type}`)
}