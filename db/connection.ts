import { Sequelize } from 'sequelize';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));

// DB PRUEBAS
const db = new Sequelize(config.TEST.DB, config.TEST.USERDB, config.TEST.PASSDB, {
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

export default db;