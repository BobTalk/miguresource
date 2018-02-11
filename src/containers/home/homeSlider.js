import React from "react";
import ReactSwipe from "react-swipe"
export default class homeSlider extends React.Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    render() {
        /*continuous两值 true表示循环播放*/
        let opts = {
            continuous: true, auto: 3000, callback: (index)=> {
                this.setState({index}) //每次动画结束后 将索引映射到当前的组件的状态上
            }
        }
        return (<div className="home-swiper">
            <ReactSwipe className="carousel" swipeOptions={opts}>
                {this.props.lists.map((item, index)=>(
                    <div key={index}>
                        <a href={item.url}>
                            <img src={item.photoUrl} alt=""/>
                        </a>
                    </div>
                ))}
            </ReactSwipe>
            <div className="dots">
                {this.props.lists.map((item, index)=>(
                    <span key={index} className={this.state.index === index ? "active" : ""}></span>
                ))}
            </div>
        </div>)
    }
}