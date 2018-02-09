import React from 'react'
export default  class SliderDots extends React.Component {
    render() {
        return (<div className="slider-dots">
            {this.props.items.map((item, index)=> (
                <span className={
                    (this.props.index === index) || (this.props.index === this.props.items.length && index == 0) ? "active" : ""}
                      key={index} onClick={()=> {
                    this.props.go(index - this.props.index)
                }}></span>
            ))}
        </div>)
    }
}