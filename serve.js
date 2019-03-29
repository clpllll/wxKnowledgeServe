const Koa = require('koa');
const app = new Koa();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("wx");
  app.context.dbo = dbo;
});
app.use(async ctx => {
  ctx.body = "hello world";
})
app.listen('3008');
console.log('port 3008',new Date().toLocaleString())