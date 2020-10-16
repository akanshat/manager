module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  PORT: '3307',
  DB: "manager",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
