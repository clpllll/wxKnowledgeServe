module.exports = async (ctx) => {
  // ctx.request.query 原生的方法
  const type = ctx.request.query.key;
  const arr = await ctx.dbo.collection(type).find({}).toArray();
  // console.log(type,arr)
  ctx.body = arr;
}