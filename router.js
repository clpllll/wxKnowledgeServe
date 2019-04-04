const { getTraining, addTraining, getIssue, getSession } = require('./main');
module.exports = (router) => {
  router
    .get('/wx/training', async (ctx, next) => {
      await getTraining(ctx)
    })
    .get('/wx/training_add', async (ctx, next) => {
      await addTraining(ctx)
    })
    .get('/wx/issue', async (ctx, next) => {
      await getIssue(ctx)
    })
    .post('/wx/session_key', async (ctx, next) => {
      await getSession(ctx)
    })
  return router
}