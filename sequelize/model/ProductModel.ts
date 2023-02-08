import { sequelize } from '../init';
const { DataTypes } = require('sequelize');

export const ProductModel = sequelize.define('pj_product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  underscored: true,
  tableName: 'pj_product',
  createdAt: false,
  updatedAt: false
});
