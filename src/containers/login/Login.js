import React from "react";
import HearderT from "../../component/header/Header"
import {Link} from "react-router-dom"
import "./login.less"
export default class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <HearderT>登录</HearderT>
                <div>
                    <ul>
                        <li>
                            <label htmlFor="username">用户名</label>
                            <input type="text" id="username"/>
                        </li>
                        <li>
                            <label htmlFor="password">密码</label>
                            <input type="text" id="password"/>
                        </li>
                        <li>
                            <Link to={"/register"}>注册</Link>
                        </li>
                        <li>
                            <button>登录</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}