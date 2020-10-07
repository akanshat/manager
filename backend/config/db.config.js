module.exports = {
  HOST: "localhost",
  USER: "akansha",
  PASSWORD: "akansha",
  DB: "manager",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
