import React from "react"
import './index.less'
import {Link} from "react-router-dom"
import bg from "../../common/images/2.jpg"
import avatar from "../../common/images/2.jpg"
export default class Profile extends React.Component {
    render() {
        return (<div className="profile">
            <div className="profile-bg">
                <img src={bg} alt=""/>
                <img src={avatar} alt="" className="avatar"/>
                <Link to={"/login"} className="login-btn">登录</Link>
            </div>
        </div>)
    }
}
