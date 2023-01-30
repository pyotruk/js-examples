console.log("start");

setTimeout(() => console.log("timeout"));

Promise.resolve(1).then((v) => console.log(v));
Promise.resolve(2).then((v) => {
    console.log(v);
    return v;
}).then((v) => console.log(v + 1));

console.log("end");
