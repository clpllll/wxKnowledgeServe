module.exports = (ctx) => {
  ctx.dbo.collection("javascript").insert({
    issue: "解释 null 和 undefined",
    answer: "null表示一个标识被赋值了，且该标识赋值为“空值”,从逻辑角度来看，null值表示空对象指针；undefined表示声明了标识，但没有给标识赋值。",
    analyze: []
  })
}