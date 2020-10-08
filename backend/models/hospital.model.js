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
      patient_count: {
        type: Sequelize.INTEGER,
      }
    },
    {
      tableName: "hospital",
      timestamps: false,
    }
  );

  return Hospital;
};
