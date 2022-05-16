"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ACTIVIDAD = connection_1.default.define('ACTIVIDAD', {
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
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    CLAVE_EMPLEADO: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_ACTIVIDAD: {
        type: sequelize_1.DataTypes.DATE
    },
    ACTIVIDAD: {
        type: sequelize_1.DataTypes.STRING
    },
    REFERENCIA: {
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
    tableName: 'ACTIVIDAD',
    timestamps: false,
    freezeTableName: true
});
exports.default = ACTIVIDAD;
//# sourceMappingURL=ACTIVIDADES.js.map