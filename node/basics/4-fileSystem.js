// 对文件的操作有两种编程方式
// 1. 回调  （传统的
// 2. promise

const fs = require("fs");
const fsPromise = require("fs").promises;

// 异步读取文件
// fs.readFile("./file.txt", (err, data) => {
//   console.log(data.toString());
// });

fs.writeFile("./file.txt", "written by fs.write", (err) => {
  if (err) console.log(err);
  console.log("完成写入文件");
});

let buf = Buffer.alloc(1024);
fs.open("./file.txt", "r+", (err, fd) => {
  if (err) return console.error(err);
  console.log("文件打开成功：", fd);
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) return console.error(err);
    console.log("读取文件内容", bytes.toString());
    fs.close(fd, (err) => {
      if (err) return console.error(err);
      console.log("文件关闭成功");
    });
  });
});

async function read() {
  try {
    let bytes = await fsPromise.readFile("./file.txt");
    console.log("promise 读取文件:", bytes.toString());
  } catch (err) {
    return console.error(err);
  }
}
read();
