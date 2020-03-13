exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('User').del()
  .then(() => [
    {
      id: 1,
      email: 'dragonwarrior920619@gmail.com',
      name: 'Maxim',
      surname: 'Rogozha'
    },
    {
      id: 2,
      email: 'alexsandrpapob@gmail.com',
      name: 'Alexsander',
      surname: 'Papob'
    },
    {
      id: 3,
      email: 'nemanjastolic0927@gmail.com',
      name: 'Nemanja',
      surname: 'Stolic'
    }
  ])
  .then(newUsers => Promise.all(newUsers.map(user => knex('User').insert(user))))
  .catch(err => console.log('err: ', err));
};