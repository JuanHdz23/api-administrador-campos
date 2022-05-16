"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const USUARIO = connection_1.default.define('USUARIOS', {
    CONTROL: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    PATERNO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    MATERNO: {
        type: sequelize_1.DataTypes.STRING
    },
    USUARIO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    PASSWORD: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    CLAVE_EMPLEADO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    CLAVE_LUGAR: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ACTIVO: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    ROL: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    SALT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    USUARIO_REG: {
        type: sequelize_1.DataTypes.STRING
    },
    USUARIO_UAC: {
        type: sequelize_1.DataTypes.STRING
    },
    FCH_REG: {
        type: sequelize_1.DataTypes.DATE
    },
    FCH_UAC: {
        type: sequelize_1.DataTypes.DATE
    },
}, {
    tableName: 'USUARIOS',
    timestamps: false,
    freezeTableName: true
});
exports.default = USUARIO;
//# sourceMappingURL=USUARIO.js.map