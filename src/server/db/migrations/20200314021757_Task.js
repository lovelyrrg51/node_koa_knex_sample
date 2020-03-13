exports.up = (knex, Promise) => {
  return knex.schema.createTable('Task', (table) => {
    table.increments('id').primary().unsigned();
    table.string('name').notNullable().unique();
    table.text('description');
    table.integer('score').notNullable();
    table.integer('status').notNullable();
    table.integer('user_id').references('User.id').unsigned().index().onDelete('CASCADE');
    table.integer('project_id').references('Project.id').unsigned().index().onDelete('CASCADE');
  });
};
        
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Task');
};
          