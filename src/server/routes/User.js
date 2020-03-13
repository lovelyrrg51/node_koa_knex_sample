const Router = require('koa-router');
const queries = require('../db/queries/User');

const router = new Router();
const BASE_URL = `/api/users`;

router.get(BASE_URL, async(ctx) => {
  try {
    const users = await queries.getUsers(ctx.request.body);
    ctx.body = {
      status: 'success',
      data: users
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    }
  }
})

router.post(BASE_URL, async(ctx) => {
  try {
    const newUser = await queries.addUser(ctx.request.body);
    if (newUser[0].email) {
      ctx.status = 200;
      ctx.body = {
        status: 'Success to add user',
        data: newUser[0]
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      }
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    }
  }   
})

module.exports = router;