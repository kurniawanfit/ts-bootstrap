import { sequelize } from '../init';
const { DataTypes } = require('sequelize');

export const UserModel = sequelize.define('pj_user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  joinDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  underscored: true,
  tableName: 'pj_user',
  createdAt: false,
  updatedAt: false
});
