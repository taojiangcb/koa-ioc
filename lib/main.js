"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Router = require("koa-router");
var ioc_dir = function (path) {
    var router = new Router();
    var server_files;
    var files = fs_1.default.readdirSync(path);
    server_files = files.filter(function (f) { return f.endsWith(".js"); });
    server_files.forEach(function (f) {
        var mapping = require(path + "/" + f);
        for (var url in mapping) {
            var funs = url.split(/\s+/i);
            var method_func = funs[0].toLowerCase();
            if (router[method_func]) {
                console.log("\u6CE8\u5165:" + url);
                router[method_func](funs[1], mapping[url]);
            }
            else {
                console.log("未知服务:" + url);
            }
        }
    });
    return router.routes();
};
exports.ioc_dir = ioc_dir;
