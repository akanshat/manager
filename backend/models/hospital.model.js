module.exports = (sequelize, Sequelize) => {
  const Hospital = sequelize.define(
    "hospital",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "hospital",
      timestamps: false,
    }
  );

  return Hospital;
};
