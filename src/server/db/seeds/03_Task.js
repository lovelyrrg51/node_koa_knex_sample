const config = require('../config');

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Task').del()
  .then(() => [
    {
      id: 1,
      name: 'A1',
      description: 'A1111111111111111111111',
      score: 4,
      status: config.status.active,
      user_id: 1,
      project_id: 1
    },
    {
      id: 2,
      name: 'B1',
      description: 'B1111111111111111111111',
      score: 5,
      status: config.status.completed,
      user_id: 2,
      project_id: 2
    },
    {
      id: 3,
      name: 'A2',
      description: 'A2222222222222222222222',
      score: 4,
      status: config.status.declined,
      user_id: 1,
      project_id: 1
    },
    {
      id: 4,
      name: 'C1',
      description: 'C1111111111111111111111',
      score: 5,
      status: config.status.inactive,
      user_id: 3,
      project_id: 3
    },
    {
      id: 5,
      name: 'B2',
      description: 'B2222222222222222222222',
      score: 4,
      status: config.status.active,
      user_id: 2,
      project_id: 2
    },
    {
      id: 6,
      name: 'D1',
      description: 'D1111111111111111111111',
      score: 5,
      status: config.status.declined,
      user_id: 1,
      project_id: 4
    },
    {
      id: 7,
      name: 'A3',
      description: 'A3333333333333333333333',
      score: 4,
      status: config.status.completed,
      user_id: 1,
      project_id: 1
    },
    {
      id: 8,
      name: 'C2',
      description: 'C2222222222222222222222',
      score: 5,
      status: config.status.active,
      user_id: 3,
      project_id: 3
    },
    {
      id: 9,
      name: 'C3',
      description: 'C3333333333333333333333',
      score: 3,
      status: config.status.declined,
      user_id: 3,
      project_id: 3
    },
    {
      id: 10,
      name: 'D2',
      description: 'D2222222222222222222222',
      score: 5,
      status: config.status.completed,
      user_id: 1,
      project_id: 4
    },
    {
      id: 11,
      name: 'A4',
      description: 'A4444444444444444444444',
      score: 5,
      status: config.status.completed,
      user_id: 1,
      project_id: 1
    },
    {
      id: 12,
      name: 'B3',
      description: 'B3333333333333333333333',
      score: 3,
      status: config.status.completed,
      user_id: 2,
      project_id: 2
    }
  ])
  .then(newTasks => Promise.all(newTasks.map(task => knex('Task').insert(task))))
  .catch(err => console.log('err: ', err));
};