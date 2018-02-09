import  React from "react"
import SliderList from './SliderList'
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'
import banner1 from './img/banenr1.jpg'
import banner2 from './img/banenr2.jpg'
import banner3 from './img/banner3.jpg'
import "./Slider.less"
let item = [
    {src: banner1},
    {src: banner2},
    {src: banner3}
]
export default  class Slider extends React.Component {
    constructor() {
        super();

        this.state = {
            index: 0, //表示当前图片索引
            delay: 2,
            speed: 0.5,
            autoplay: true,
            dots: true,
            arrows: true,
            items: item,
        }
    }

    go = (step)=> {
        let index = this.state.index + step;
        if (index > this.state.items.length) {
            this.$ul.style.transitionDuration = "";//清除ul上的动画
            this.$ul.style.left = 0;
            setTimeout(()=> {
                this.$ul.style.transitionDuration = this.state.speed + "s";
                index = 1;
                this.setState({index})
            }, 30)
            return
        }
        if (index < 0) {
            this.$ul.style.transitionDuration = "";//清除ul上的动画
            this.$ul.style.left = this.state.items.length * -1 * 400 + "px";
            setTimeout(()=> {
                this.$ul.style.transitionDuration = this.state.speed + "s";
                index = this.state.items.length - 1;
                this.setState({index})
            }, 30)
            return
        }
        this.setState({
                index
            }
        )
    }
    turn = ()=> {
        this.timer = setInterval(()=> {
            this.go(1)
        }, this.state.delay * 1000)
    }

    componentDidMount() {
        if (this.state.autoplay) {
            this.turn();
        }
        this.$ul = this.refs.list.refs.ul;
        this.$arrows = this.refs.sliderArrows.refs.arrows;
    }

    render() {
        return (
            <div className="slider-container" onMouseEnter={()=> {
                clearInterval(this.timer);
                this.$arrows.style = "display:block"

            }} onMouseLeave={()=> {
                this.$arrows.style = "display:none";
                this.turn()
            }}>
                <SliderList ref="list" index={this.state.index} items={this.state.items} speed={this.state.speed}/>

                {this.state.arrows ? <SliderArrows ref="sliderArrows" go={this.go}/> : null}
                {this.state.dots ?
                    <SliderDots ref="dots" go={this.go} items={this.state.items} index={this.state.index}/> : null}
            </div >
        )
    }
}