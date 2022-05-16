"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_CITA = connection_1.default.define('DATOS_CITA', {
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
    PATERNO: {
        type: sequelize_1.DataTypes.STRING
    },
    MATERNO: {
        type: sequelize_1.DataTypes.STRING
    },
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    SEXO: {
        type: sequelize_1.DataTypes.STRING,
    },
    NO_EMPLEADO: {
        type: sequelize_1.DataTypes.STRING,
    },
    PUESTO: {
        type: sequelize_1.DataTypes.STRING,
    },
    TRAMITE: {
        type: sequelize_1.DataTypes.STRING
    },
    AREA_ADSCRIPCION: {
        type: sequelize_1.DataTypes.STRING
    },
    CELULAR: {
        type: sequelize_1.DataTypes.STRING
    },
    CORREO: {
        type: sequelize_1.DataTypes.STRING
    },
    VIGENCIA_C3: {
        type: sequelize_1.DataTypes.STRING
    },
    OFICIO_C3: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_APERTURA: {
        type: sequelize_1.DataTypes.DATE
    },
    FECHA_CITA: {
        type: sequelize_1.DataTypes.DATE
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
    tableName: 'DATOS_CITA',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_CITA;
//# sourceMappingURL=DATOS_CITAS.js.map