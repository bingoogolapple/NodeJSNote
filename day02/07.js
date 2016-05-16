var bar = require("bar");  //在引用一个文件夹

/**
 默认找改文件夹中的index.js文件,或者package.json中的main对应配置的文件
{
    "name": "kaoladebar",
    "version": "1.0.1",
    "main" : "app.js"
}

 */

console.log(bar.msg);
