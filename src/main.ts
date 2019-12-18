
import fs = require('fs');
import Router = require('koa-router');
let ioc_dir = function (path: string) {
  let router: Router = new Router();
  var server_files: string[];
  var files = fs.readdirSync(path);
  server_files = files.filter((f) => { return f.endsWith(".js"); });
  server_files.forEach(f => {
    let mapping = require(`${path}/${f}`);
    for (var url in mapping) {
      let funs: string[] = url.split(/\s+/i);
      var method_func: string = funs[0].toLowerCase();
      if (router[method_func]) {
        console.log(`注入:${url}`);
        router[method_func](funs[1], mapping[url]);
      }
      else {
        console.log("未知服务:" + url);
      }
    }
  });
  return router.routes();
}

export { ioc_dir };