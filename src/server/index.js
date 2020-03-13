const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/User');
const taskRoutes = require('./routes/Task');
const projectRoutes = require('./routes/Project');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(userRoutes.routes());
app.use(taskRoutes.routes());
app.use(projectRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;