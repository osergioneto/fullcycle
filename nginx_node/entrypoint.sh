# entrypoint.sh

npm install
npx sequelize db:migrate
npx sequelize db:seed:all
node index