"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
// DB PRUEBAS
const db = new sequelize_1.Sequelize(config.TEST.DB, config.TEST.USERDB, config.TEST.PASSDB, {
    dialect: 'postgres',
    host: config.TEST.HOST
});
// DB PROD
// const db = new Sequelize(config.PROD.DB, config.PROD.USERDB, config.PROD.PASSDB, {
//     dialect: 'mssql',
//     dialect:'mssql',
//     dialectOptions: {
//             options: {
//                 encrypt: false
//             }
//         }
//   });
exports.default = db;
//# sourceMappingURL=connection.js.map