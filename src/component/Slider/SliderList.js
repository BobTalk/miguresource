import  React from "react"
export default  class SliderList extends React.Component {
    render() {
        let defalutstyle = {
            width: (this.props.items.length * 1 + 1) * 400 + "px",
            left: this.props.index * 400 * -1 + "px",
            transition: `left ${this.props.speed}s linear`
        }
        return (
            <ul style={defalutstyle} ref="ul">
                {
                    this.props.items.map((item, index)=> (
                        <li key={index}>
                            <img src={item.src} key={index}/>
                        </li>
                    ))
                }
                <li><img src={this.props.items[0].src}/></li>
            </ul>
        )
    }
}