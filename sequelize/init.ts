const { Sequelize } = require('sequelize');
const CryptoJS = require('crypto-js');

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  CryptoJS.AES.decrypt(process.env.DB_USER.toString(), 'FIT999').toString(CryptoJS.enc.Utf8),
  CryptoJS.AES.decrypt(process.env.DB_PASS.toString(), 'FIT999').toString(CryptoJS.enc.Utf8),
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: { max: 5 },
    logging: console.log, // you can set this to false in production environment
    dialect: 'postgres',
    dialectOptions: {
      application_name: process.env.SERVICE_NAME
    }
  }
);
