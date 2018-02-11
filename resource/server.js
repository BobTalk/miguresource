let express = require("express");
let app = express();
app.listen(3000);
console.log("listen port 3000");
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