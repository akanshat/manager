module.exports = {
  HOST: "db",
  USER: "root",
  PASSWORD: "akansha",
  PORT: '3306',
  DB: "manager",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
