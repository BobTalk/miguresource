import React from "react";
import HearderT from "../../component/header/Header"
import {connect} from "react-redux"
import "./register.less"
import actions from  "../../store/actions/session"
@connect(state=> ({...state.session}), actions)
export default class Register extends React.Component {
    constructor() {
        super();
    }

    componentWillUnmount() {
        this.props.clearMessage();
    }

    render() {
        return (
            <div className="reg">
                <HearderT>注册</HearderT>
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
                            {this.props.error === 1 ? <p style={{color: "red"}}>{this.props.msg}</p> : null}
                            {this.props.success.length ? <p style={{color: "green"}}>{this.props.success}</p> : null}
                        </li>
                        <li>
                            <button onClick={()=> {
                               /* alert(this.password)*/
                                this.props.registerAction(this.username.value, this.password.value, this.props.history)
                            }}>注册
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}