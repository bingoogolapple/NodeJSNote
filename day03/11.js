/**
 * Created by bingoogolapple on 16/5/20.
 */
var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("haha",{news:[]});
});

app.get("/check",function(req,res){
    // 呈递快速测试的文字,比如json
    res.send({
        "user" : "ok"
    });
});

app.listen(3000);