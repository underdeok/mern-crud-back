import { Sequelize } from "sequelize";

const db = new Sequelize("mern_db", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
