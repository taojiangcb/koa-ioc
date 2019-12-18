"use strict";
exports.__esModule = true;
var koa = require("koa");
var main_1 = require("../src/main");
var path_1 = require("path");
var axios_1 = require("axios");
var app = new koa();
var ioc = main_1.ioc_dir(path_1.resolve(__dirname, "../server"));
app.use(ioc);
console.log(ioc);
var axios = axios_1["default"].create({ baseURL: "http://localhost:3100" });
app.listen(3100, function () {
    console.log('server started...');
    console.log('http://localhost:3100');
});
// describe("testServer", () => {
//   it('wait...',(done)=> {
//     setTimeout(done,3000);
//   });
//   it('test post', (done) => {
//     axios.post("testSvr/testPort")
//       .then(res => {
//         console.log(res.data.data);
//         done();
//       })
//   })
//   it("test get", done => {
//     axios.get('testSvr/testGet')
//       .then(res => {
//         console.log(res.data.data);
//         done();
//       })
//   })
// })
