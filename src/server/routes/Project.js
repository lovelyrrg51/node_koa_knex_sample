const Router = require('koa-router');
const queries = require('../db/queries/Project');

const router = new Router();
const BASE_URL = `/api/projects`;

router.get(BASE_URL, async(ctx) => {
  try {
    const projects = await queries.getProjects(ctx.request.body);
    ctx.body = {
      status: 'success',
      data: projects
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
    const newProject = await queries.addProject(ctx.request.body);
    if (newProject[0].name) {
      ctx.status = 200;
      ctx.body = {
        status: 'Success to add task',
        data: newProject[0]
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