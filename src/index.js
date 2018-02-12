import React from "react"
import  ReactDOM from "react-dom"
import "../public/css/reset.css"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"
//配置路由的组件
import Home from "./containers/home/Home"
import Profile from "./containers/profile/Profile"
import Lesson from "./containers/lesson/lesson"
import App from "./containers/App"
import Detail from "./containers/detail/Detail"
import {Provider} from "react-redux"
import store from "./store"
import Login from "./containers/login/Login"
import Register from "./containers/reg/Register"

//轮播图组件
import Slider from "./component/Slider/Slider"
ReactDOM.render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/lesson" component={Lesson}/>
                <Route path="/detail/:lessonId" component={Detail}/>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </Switch>
        </App>
    </Router>
</Provider>, document.querySelector("#root"));