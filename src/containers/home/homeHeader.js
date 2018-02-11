import React from "react";
import Transition from "react-transition-group/Transition"
import headericon from "../../common/images/1.jpg"
import "./index.less"
const duration = 300;
const defalutStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: "none"
}
const transitionStyle = {
    entering: {opacity: 0},
    entered: {opacity: 1}
}
export default class homeHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }

    changeShow = ()=> {
        this.setState({isShow: !this.state.isShow})
    }

    render() {
        return (<div className="home-header">
            <div className="header-logo">
                <img src={headericon} alt=""/>
                <div onClick={this.changeShow}>
                    {this.state.isShow ? <i className="iconfont icon-guanbi"></i> :
                        <i className="iconfont icon-liebiao"></i>}
                </div>
            </div>
            <Transition in={this.state.isShow} timeout={duration} onEnter={(node)=> {
                node.style.display = "block"
            }} onExited={(node)=> {
                node.style.display = "none"
            }}>
                {(state)=>(
                    <ul className="header-menu"
                        style={{...defalutStyle, ...transitionStyle[state]}}
                        onClick={(e)=> {
                            this.props.selectCurrentLesson(e.target.dataset.type)
                            this.changeShow()
                        }}
                    >
                        <li data-type="all">全部课程</li>
                        <li data-type="react">react课程</li>
                        <li data-type="Vue">Vue课程</li>
                    </ul>
                )}
            </Transition>
        </div>)
    }
}