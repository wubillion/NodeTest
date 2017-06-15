/**
 * Created by wbl on 2017/6/14.
 */

var http = require('http');
var url = require('url');


function start(route) {

    //start()中定义函数onRequest
    function onRequest (request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Request for " + pathName + " Received!");

        //同一个模块可以直接调用route函数
        route(pathName);

        response.writeHeader(200, {"Content-Type": "text/plain"});
        response.write("Hello World!");
        response.end();
    };

    http.createServer(onRequest).listen(8888);
    console.log("Server has started!");
}

exports.start = start;


