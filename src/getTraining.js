module.exports = async(ctx) => {
  const arr = await ctx.dbo.collection("training").find({}).toArray();
  ctx.body = arr;
}