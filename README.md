# Building the node project with Koa(Knex) and Postgres

1. In the Knexfile.js, replace your own user name and password.
2. To migrations
    - Run the command "knex migrate:latest".
    - To write the seed data, run the commands 
      knex seed:run --specific=01_User.js
      knex seed:run --specific=02_Project.js
      knex seed:run --specific=03_Task.js
3. There are 6 apis in this project.
   POST /api/users
   Get /api/users
   POST /api/tasks
   Get /api/tasks
   POST /api/projects
   Get /api/projects
4. Finally, run the command "npm start".

Enjoy!!!