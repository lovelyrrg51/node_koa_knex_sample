exports.up = (knex, Promise) => {
  return knex.schema.createTable('Project', (table) => {
    table.increments('id').primary().unsigned();
    table.string('name').notNullable().unique();
    table.text('body');
    table.integer('status').notNullable();
    table.integer('user_id').references('User.id').unsigned().index().onDelete('CASCADE');
  });
};
        
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Project');
};
          