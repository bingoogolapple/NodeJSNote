/**
 * Created by bingoogolapple on 16/5/17.
 */

var express = require("express");

var app = express();

app.use(express.static("./public"));

app.get("/haha",function(req,res){
    res.send("haha ");
});

app.listen(3000);