import React from "react"
import './index.less'
import Header from "./homeHeader"
import {connect} from "react-redux"
import actions from "../../store/actions/home"
import HomeSlider from "./homeSlider"
import Loading from "../../component/loading/loading"
import HomeList from "./homeList"
import {loadMore, pullRefresh} from "../../common/util"
@connect(state=>({...state.home}), actions)
export default class Home extends React.Component {
    componentDidMount() {
        if (this.props.sliders.length === 0) {
            this.props.getSlidersAction()
        }
        if (this.props.lesson.list.length === 0) {
            this.props.getLessonsAction()
        }
        loadMore(this.ele, this.props.getLessonsAction)
        pullRefresh(this.ele, this.props.refreshAction)

    }

    selectCurrentLesson = (val)=> {
        this.props.updateCurrentLesson(val);
    }
    //获取更多
    loadMore = ()=> {
        this.props.getLessonsAction()
    }

    render() {
        return (<div>
            <Header selectCurrentLesson={this.selectCurrentLesson}/>
            <div className="content" ref={x=>this.ele = x}>
                {this.props.sliders.length ? <HomeSlider lists={this.props.sliders}/> : <Loading/>}
                <h1 className="home-title"><i className="iconfont icon-wode_kecheng">&nbsp;&nbsp;我的课程</i></h1>
                <HomeList lessonList={this.props.lesson.list}/>
                {this.props.lesson.isLoading ? <Loading/> : null}
                <button onClick={this.loadMore}>加载更多</button>
            </div>
        </div>)
    }
}
/*
 connect(state=>({...state.home}), actions)(Home)*/
