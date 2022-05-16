"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ESTATUS_CARPETA = connection_1.default.define('ESTATUS_CARPETA', {
    CLAVE_LUGAR: {
        type: sequelize_1.DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },
    ANIO: {
        type: sequelize_1.DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },
    CONTROL: {
        type: sequelize_1.DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },
    FECHA_RECEPCION: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_JUDICIALIZACION: {
        type: sequelize_1.DataTypes.STRING
    },
    ANIOS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MESES: {
        type: sequelize_1.DataTypes.INTEGER
    },
    DIAS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    HORAS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ESTATUS: {
        type: sequelize_1.DataTypes.STRING
    },
    USUARIA_CONTINUA_PROCESO: {
        type: sequelize_1.DataTypes.STRING
    },
    OBSERVACIONES: {
        type: sequelize_1.DataTypes.STRING
    },
    USUARIO: {
        type: sequelize_1.DataTypes.STRING
    },
    FCH_REG: {
        type: sequelize_1.DataTypes.DATE
    },
    FCH_UAC: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    tableName: 'ESTATUS_CARPETA',
    timestamps: false,
    freezeTableName: true
});
exports.default = ESTATUS_CARPETA;
//# sourceMappingURL=ESTATUS_CARPETA.js.map