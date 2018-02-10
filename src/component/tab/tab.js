import React from "react"
import {NavLink} from "react-router-dom"
import "./tab.less"
export default class tab extends React.Component {
    render() {
        return (<nav className="nav">
            <NavLink to={"/"} exact={true}><i className="iconfont icon-xingqiu"></i><span>首页</span></NavLink>
            <NavLink to={"/lesson"}><i className="iconfont icon-react"></i><span>我的课程</span></NavLink>
            <NavLink to={"/profile"}><i className="iconfont icon-xiaolian"></i><span>个人中心</span></NavLink>
        </nav>)
    }
}