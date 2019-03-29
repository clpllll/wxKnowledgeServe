const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  ctx.body = "hello world";
})
app.listen('3008');
console.log('port 3008',new Date().toLocaleString())