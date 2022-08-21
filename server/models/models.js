const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Employee = sequelize.define('employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    second_name: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "WORKER" }
});
const Department = sequelize.define('department', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    date: { type: DataTypes.DATE, allowNull: false }
});
const Jobs = sequelize.define('jobs', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    job_title: { type: DataTypes.STRING, allowNull: false },
});

const Manager = sequelize.define('manager', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

Department.hasMany(Employee)
Employee.belongsTo(Department)

Jobs.hasOne(Employee)
Employee.belongsTo(Jobs)

Department.hasOne(Manager)
Manager.belongsTo(Department)

Employee.hasOne(Manager)
Manager.belongsTo(Employee)



module.exports = {
    Employee,
    Department,
    Jobs,
    Manager
}