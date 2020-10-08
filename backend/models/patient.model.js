module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define(
    "patient",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      emergency_contact: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
        allowNull: false,
      },
      bloodtype: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      height: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      details: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      admission_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
    },
    {
      tableName: "patient",
      timestamps: false,
    }
  );

  return Patient;
};
