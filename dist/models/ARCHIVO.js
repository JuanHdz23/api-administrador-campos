"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ARCHIVO = connection_1.default.define('ARCHIVO', {
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
    DESCRIPCION: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_CIERRE: {
        type: sequelize_1.DataTypes.DATE
    },
    UBICACION: {
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
    tableName: 'ARCHIVO',
    timestamps: false,
    freezeTableName: true
});
exports.default = ARCHIVO;
//# sourceMappingURL=ARCHIVO.js.map