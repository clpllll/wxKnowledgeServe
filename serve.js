const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser');
const Router = new KoaRouter();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("wx");
  app.context.dbo = dbo;
});

const router = require('./router')(Router)
app.use(bodyParser());
app.use(router.routes())
app.use(router.allowedMethods())

app.listen('3008');
console.log('port 3008',new Date().toLocaleString())