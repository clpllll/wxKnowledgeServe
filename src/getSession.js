const request = require('request');
const WXBizDataCrypt = require('../utils/wxCrypto');
const { encrypt } = require('../utils/crypto');
module.exports = async (ctx) => {
  const { code, encryptedData, iv } = ctx.request.body;
  const appId = "wx5960a540726be2cd";
  const p = await new Promise((resolve, reject) => {
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=e3053726f6383a2263fc25a7c860cb22&js_code=${code}&grant_type=authorization_code`, (error, response, body) => {
      const body1 = JSON.parse(body)
      if (body1.session_key) resolve(body1)
      else reject("")
     })
  })
  const pc = new WXBizDataCrypt(appId, p.session_key);
  const data = pc.decryptData(encryptedData, iv);
  delete data.watermark;
  delete data.avatarUrl;
  data.openId = encrypt(data.openId); //加密openid
  ctx.body = data;
}