// buffer  缓冲区，存二进制数据用；多用于IO操作
// 可以理解为一个二进制数组

// 创建buffer
let buf = Buffer.alloc(5);
for (let i = 0; i < 5; i++) {
  buf[i] = i + 97;
}
// 从buffer中读取数据
console.log(buf.toString("ascii")); // abcdefg

buf.write("hello");
console.log(buf.toString("ascii"));

let buf2 = Buffer.from("world");
console.log(buf2.toString("ascii"));
