import React from "react"
import './index.less'
import Header from "./homeHeader"
import {connect} from "react-redux"
import actions from "../../store/actions/home"
import HomeSlider from "./homeSlider"
import Loading from "../../component/loading/loading"
@connect(state=>({...state.home}), actions)
export default class Home extends React.Component {
    componentDidMount() {
        if (this.props.sliders.length === 0) {
            this.props.getSlidersAction()
        }
    }

    selectCurrentLesson = (val)=> {
        this.props.updateCurrentLesson(val);
    }

    render() {
        return (<div>
            <Header selectCurrentLesson={this.selectCurrentLesson}/>
            <div className="content">
                {this.props.sliders.length ? <HomeSlider lists={this.props.sliders}/> : <Loading/>}
            </div>
        </div>)
    }
}
/*
 connect(state=>({...state.home}), actions)(Home)*/
