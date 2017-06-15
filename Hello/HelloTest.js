/**
 * Created by wbl on 2017/6/13.
 */

//Hello.js
//定义一个Hello类,并作为module输出，
function Hello() {
    var name;
    this.setName = function (nameString) {
        name = nameString;
    };
    this.sayHello = function () {
        console.log('Hello ' + name + '!');
    };

}

module.exports = Hello;