import { sequelize } from '../init';
const { DataTypes } = require('sequelize');

export const LoanModel = sequelize.define('pj_loan', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  loanStatus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  underscored: true,
  tableName: 'pj_loan',
  createdAt: false,
  updatedAt: false
});
