/**
 * Created by wbl on 2017/6/13.
 */

var server = require("./Hello/Server");
var router = require("./Hello/Router");


//函数原型不需要加()
server.start(router.route);

console.log(__dirname);