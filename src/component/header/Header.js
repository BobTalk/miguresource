import React from "react";
import "./header.less"
import {withRouter} from "react-router-dom"
@withRouter
export default class Header extends React.Component {
    back = ()=> {
        this.props.history.goBack();
    }

    render() {
        return (<div className="m-header">
            <i className="iconfont icon-fanhui" onClick={this.back}></i>
            {this.props.children}</div>)
    }
}