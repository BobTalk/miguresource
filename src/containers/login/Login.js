import React from "react";
import HearderT from "../../component/header/Header"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import actions from "../../store/actions/session"
import "./login.less"
@connect(state=>({...state.session}), actions)
export default class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <HearderT>登录</HearderT>
                <div>
                    <ul>
                        <li>
                            <label htmlFor="username">用户名</label>
                            <input type="text" id="username" ref={x=>this.username = x}/>
                        </li>
                        <li>
                            <label htmlFor="password">密码</label>
                            <input type="text" id="password" ref={x=>this.password = x}/>
                        </li>
                        <li>
                            <Link to={"/register"}>注册</Link>
                        </li>
                        {/* <li>
                         {this.props.error === 1 ? <p style={{color: "red"}}>{this.props.msg}</p> : null}
                         {this.props.success.length ? <p style={{color: "green"}}>{this.props.success}</p> : null}
                         </li>*/}
                        <li>
                            <button
                                onClick={()=> {
                                    this.props.loginAction(this.username.value, this.password.value, this.props.history)
                                }}>
                                登录
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}