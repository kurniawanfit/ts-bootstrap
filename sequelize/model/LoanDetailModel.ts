import { sequelize } from '../init';
const { DataTypes } = require('sequelize');

export const LoanDetailModel = sequelize.define('pj_loan_details', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  loanId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fullName: {
    type: DataTypes.STRING
  },
  identificationNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  underscored: true,
  tableName: 'pj_loan_details',
  createdAt: false,
  updatedAt: false
});
