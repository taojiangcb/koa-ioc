# koa-ioc
> ioc middleware for koa

![image](https://raw.githubusercontent.com/taojiangcb/koa-ioc/master/images/logo.png)

- 指定一个服务目录,在启动服务app时,自动灌入服务路由
- 基于koa-router二次封装 app.get,app.post,app.put 等均可使用。

# installation
unsing npm :
```
npm install kao-ioc
```

# API Reference
- ioc_dir( path : string )
    - path : 服务的目录地址


# example 
Basic usage:

```
project:
  - src
    - app.ts
    - server(dir)
      - testSvr.ts
      - ...(other server files)
```

app.ts
```
import koa from 'koa'
import { resolve } from 'path';
import {ioc_dir} from 'koa-ioc';

let app = new koa();
let ioc = ioc_dir(resolve(__dirname, "./server"));

app.use(ioc);

app.listen(3100, () => {
  console.log('server started...');
  console.log('http://localhost:3100');
})
```

testSvr.ts
```
import { Context } from "koa";

async function testPost(ctx: Context) {
  console.log('testPost...');
  ctx.response.body = "hellow post";
}

async function testGet(ctx: Context) {
  console.log('testGet...');
  ctx.response.body = 'hello get';
}

module.exports = {
  'POST /testSvr/testPort': testPost,
  'GET /testSvr/testGet': testGet,
}
```

# Contributing
Please submit all issues and pull requests to the [taojiang/koa-ioc](https://github.com/taojiangcb/koa-ioc.git/) repository!

# tests
Run tests using ==npm run test== 


