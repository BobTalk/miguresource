import React from "react"
import './index.less'
import Header from "./homeHeader"
import {connect} from "react-redux"
import actions from "../../store/actions/home"
import "babel-plugin-transform-decorators-legacy"
@connect(state=>({...state.home}), actions)
export default class Home extends React.Component {
    selectCurrentLesson = (val)=> {
        console.log(val);
        this.props.updateCurrentLesson(val);
    }

    render() {
        return (<div><Header selectCurrentLesson={this.selectCurrentLesson}/></div>)
    }
}
/*
 connect(state=>({...state.home}), actions)(Home)*/
