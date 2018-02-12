let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.listen(3000);
console.log("listen port 3000");
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method === "OPTIONS") {
        res.send(200)
    } else {
        next();
    }

})
/*轮播图*/
let axios = require("axios")
app.get("/sliders", function (req, res) {
    axios.get("http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1518316427921").then(function (result) {
        res.json(result.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
    })
})
/*获取课程接口 offset 偏移量 limit 每次取几条 type 课程类型*/
let lessons = require("./mock/lessons")
app.get("/lessons/:offset/:limit/:type", (req, res, next)=> {
    let {offset, limit, type} = req.params;
    //根据type 进行过滤
    let lists = lessons
    if (type !== "all") {
        lists = lessons.filter((item, index)=> {
            return item.type === type
        })
    }
    offset = parseInt(offset);
    limit = parseInt(limit);
    let newArrs = lists.slice(offset, offset + limit);
    let hasMore = offset + limit >= lists.length ? false : true;
    res.json({hasMore, list: newArrs})
})
/*获取单独一门课
 * params: lessonId
 * */
app.get("/lesson/:id", (req, res)=> {
    let {id} = req.params;
    res.json(lessons.find(item=>item.id == id) || {});
})
/*
 * 注册
 * params: user
 * params: msg
 * params: password
 * params: success
 * */
let crypto = require("crypto");
let userList = [];
app.post("/register", function (req, res) {
    let {username, password}= req.body;
    let user = userList.find(item=>item.username == username);
    if (user) {
        res.json({user: null, msg: "用户已存在!!!", success: "", error: 1})
    } else {
        password = crypto.createHash("md5").update("'"+password+"'").digest("base64");
        userList.push({username, password});
        res.json({user: null, msg: "", success: "恭喜注册成功!!!", error: 0})
    }
})
/*登录
 * param:username
 * param:password
 * */
app.post("/login", function (req, res) {
    let {username, password} = req.body;
    password = crypto.createHash("md5").update("'"+password+"'").digest("base64");
    let user = userList.find(item=>(item.username == username) && (item.password == password));
    if (user) {
        res.json({user: username, msg: "", success: "成功", error: 0})
    } else {
        res.json({user: username, msg: "用户名/密码不正确", success: "", error: 0})
    }
})
/*
 加密 测试
 let crypto = require("crypto");
 console.log(crypto.createHash("md5").update("jkjlkjlk").digest("base64"));*/
