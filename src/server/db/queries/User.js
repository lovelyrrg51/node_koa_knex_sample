const knex = require('../connection');

function getUsers(searchFilter) {
  const filterUsers = knex('User').where((Users) => {
    if (searchFilter.name) {
      Users.where('User.name', '=', searchFilter.name);
    }
    if (searchFilter.surname) {
      Users.where('User.surname', '=', searchFilter.surname);
    }
  })
  .offset(searchFilter.offset)
  .limit(searchFilter.limit);

  return filterUsers;
}

function addUser(newUser) {
  return knex('User')
  .insert(newUser)
  .returning('*');
}

module.exports = {
  getUsers,
  addUser
};