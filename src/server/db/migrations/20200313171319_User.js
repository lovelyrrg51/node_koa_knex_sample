exports.up = (knex, Promise) => {
  return knex.schema.createTable('User',  (table) => {
    table.increments('id').primary().unsigned();
    table.string('email').notNullable().unique().index();
    table.string('name').notNullable().index();
    table.string('surname').notNullable().index();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('User');
};
  