const knex = require('../connection');

async function get_average_score(Tasks) {
  total = 0; count = 0;
  count = Tasks.length;
  for(i = 0; i < count; i ++)
    total += Tasks[i].score;
  total /= count;

  return total;
}

function check_tasks_score(Tasks, score) {
  count = Tasks.length;  
  for (i = 0; i < count; i ++)
    if (Tasks[i].score < score){
      return 0;
    }
  return 1;
}

async function getProjects(searchFilter) {
  const filterProjects = await knex('User').where((Users) => {
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
  .join('Project', 'User.id', '=', 'Project.user_id').where((Projects) => {
    if (searchFilter.project_name) {
      Projects.whereIn('Project.name', searchFilter.project_name);
    }
    if (searchFilter.project_body) {
      Projects.whereIn('Project.body', searchFilter.project_body);
    }
    if (searchFilter.project_status) {
      Projects.whereIn('Project.status', searchFilter.project_status);
    }
  })
  .select('Project.id', 'Project.user_id', 'Project.name', 'Project.body', 'Project.status');

  let projects = [];
  await Promise.all(filterProjects.map(async Project => {
    const Tasks = await knex('Task').where('Task.project_id', '=', Project.id);
    const average = await get_average_score(Tasks);
    Project.average = average;

    if (!searchFilter.task_score)
      projects.push(Project);
    else if(check_tasks_score(Tasks, searchFilter.task_score) === 1)
      projects.push(Project);
  }));

  offset = searchFilter.offset ? searchFilter.offset : 0;
  limit = searchFilter.limit ? searchFilter.limit : projects.length;

  return projects.slice(offset, limit);
}

function addProject(newProject) {
  return knex('Project')
  .insert(newProject)
  .returning('*');
}

module.exports = {
  getProjects,
  addProject
};