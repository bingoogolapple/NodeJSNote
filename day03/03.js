/**
 * Created by bingoogolapple on 16/5/17.
 */

var express = require("express");
var app = express();

/**
 * npm install --save ejs
 * 设置模板引擎,默认就在views目录
 */
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("haha",{
        "news" : ["我是小新闻啊","我也是啊","哈哈哈哈"]
    });
});

app.listen(3000);