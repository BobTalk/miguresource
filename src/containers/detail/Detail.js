import React from "react";
import "./detail.less"
import Header from "../../component/header/Header"
import {getLessonOne} from "../../api/home"
import "babel-polyfill"
export default class Detail extends React.Component {
    constructor() {
        super();
        this.state = {lesson: {}}
    }

    async componentWillMount() {
        /*如果state有值 从页面跳转*/
        let lesson = this.props.location.state;
        if (!lesson) {
            //alert(this.props.match.params.lessonId)
            lesson = await getLessonOne(this.props.match.params.lessonId);
        }
        this.setState({lesson})
    }

    render() {

        return (
            <div>
                <Header>详情页</Header>
                <video src={this.lesson} style={{width: "100%"}} poster={this.lesson}
                       controls={true}></video>
            </div>
        )
    }
}