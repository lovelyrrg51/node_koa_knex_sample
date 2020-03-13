const Router = require('koa-router');
const queries = require('../db/queries/Task');

const router = new Router();
const BASE_URL = `/api/tasks`;

router.get(BASE_URL, async(ctx) => {
  try {
    const tasks = await queries.getTasks(ctx.request.body);
    ctx.body = {
      status: 'success',
      data: tasks
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    }
  }
});

router.post(BASE_URL, async(ctx) => {
  try {
    const newTask = await queries.addTask(ctx.request.body);
    if (newTask[0].name) {
      ctx.status = 200;
      ctx.body = {
        status: 'Success to add task',
        data: newTask[0]
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