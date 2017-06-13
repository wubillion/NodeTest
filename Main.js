/**
 * Created by wbl on 2017/6/13.
 */

//引用Hello模块(类)
var Hello = require('./Hello/HelloTest');

hello = new Hello();
hello.setName('Wbl');
hello.sayHello();


