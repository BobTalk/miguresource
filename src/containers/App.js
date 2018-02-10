import React from "react"
import  Tab from "../component/tab/tab"
export default class App extends React.Component {
    render() {
        return (<div>
            {this.props.children}
            <Tab/>
        </div>)
    }
}