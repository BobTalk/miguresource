import React from "react"
import  ReactDOM from "react-dom"
import "../public/css/reset.css"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"
//配置路由的组件
import Home from "./containers/home/Home"
import Profile from "./containers/profile/Profile"
import Lesson from "./containers/lesson/lesson"
import App from "./containers/App"
import {Provider} from "react-redux"
import store from "./store"

//轮播图组件
import Slider from "./component/Slider/Slider"
ReactDOM.render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/lesson" component={Lesson}/>
            </Switch>
        </App>
    </Router>
</Provider>, document.querySelector("#root"));