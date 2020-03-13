exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Project').del()
  .then(() => [
    {
      id: 1,
      name: 'Project A',
      body: 'the project which have related A tasks.',
      status: 0,
      user_id: 1,
    },
    {
      id: 2,
      name: 'Project B',
      body: 'the project which have related B tasks.',
      status: 1,
      user_id: 2,
    },
    {
      id: 3,
      name: 'Project C',
      body: 'the project which have related C tasks.',
      status: 2,
      user_id: 3,
    },
    {
      id: 4,
      name: 'Project D',
      body: 'the project which have related D tasks.',
      status: 3,
      user_id: 1
    }
  ])
  .then(newProjects => Promise.all(newProjects.map(Project => knex('Project').insert(Project))))
  .catch(err => console.log('err: ', err));
};