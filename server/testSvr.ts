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