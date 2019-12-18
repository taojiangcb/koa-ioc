import koa = require('koa');
import { ioc_dir } from '../src/main';
import { resolve } from 'path';
import Axios from "axios"
let app = new koa();

let ioc = ioc_dir(resolve(__dirname, "../server"));
app.use(ioc);
console.log(ioc);
let axios = Axios.create({ baseURL: "http://localhost:3100" });

app.listen(3100, () => {
  console.log('server started...');
  console.log('http://localhost:3100');
})

describe("testServer", () => {
  it('wait...',(done)=> {
    setTimeout(()=>{done()},1000);
  });
  it('test post', (done) => {
    axios.post("/testSvr/testPort")
      .then(res => {
        console.log(res.data);
        done();
      })
  })
  it("test get", done => {
    axios.get('/testSvr/testGet')
      .then(res => {
        console.log(res.data);
        done();
      })
  })
})