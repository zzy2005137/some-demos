// commonJS 模块
// require 导入 ， module.exports 导出
// 导出的 module.exports 是module的一个属性，可以解构赋值

const myModule = require("./myModule");

console.log(myModule.CONST_VALUE);
myModule.printValue();


