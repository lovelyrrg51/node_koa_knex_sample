const knex = require('../connection');

function getTasks(searchFilter) {
  const filterTasks = knex('User').where((Users) => {
    if (searchFilter.user_name) {
      Users.whereIn('User.name', searchFilter.user_name);
    }
    if (searchFilter.user_surname) {
      Users.whereIn('User.surname', searchFilter.user_surname);
    }
    if (searchFilter.user_id) {
      Users.whereIn('User.id', searchFilter.user_id);
    }  
  })
  .join('Task', 'User.id', '=', 'Task.user_id').where((Tasks) => {
    if (searchFilter.task_name) {
      Tasks.whereIn('Task.name', searchFilter.task_name);
    }
    if (searchFilter.task_description) {
      Tasks.whereIn('Task.description', searchFilter.task_description);
    }
    if (searchFilter.task_status) {
      Tasks.whereIn('Task.status', searchFilter.task_status);
    }
    if (searchFilter.task_score) {
      Tasks.where('Task.score', '>', searchFilter.task_score);
    }
  })
  .offset(searchFilter.offset)
  .limit(searchFilter.limit)
  .select('Task.id', 'Task.user_id', 'User.email', 'Task.name', 'Task.description', 'Task.status', 'Task.score');

  return filterTasks;
}

function addTask(newTask) {
  return knex('Task')
  .insert(newTask)
  .returning('*');
}

module.exports = {
  getTasks,
  addTask
};