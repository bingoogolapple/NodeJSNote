/**
 * Created by bingoogolapple on 16/5/22.
 */
var express = require("express");

var app = express();

app.get("/",function(req,res){
    console.log(req.query);
    res.send();
});

app.listen(3000);