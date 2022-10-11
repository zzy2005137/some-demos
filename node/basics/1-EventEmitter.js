// 实现事件循环的重要类

const events = require("events");
let eventEmitter = new events.EventEmitter();

eventEmitter.on("eventType", callback);

function callback() {
  console.log("callback function executed");
}

eventEmitter.emit("eventType");
