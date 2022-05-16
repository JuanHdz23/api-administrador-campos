"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_AGRESOR = connection_1.default.define('DATOS_AGRESOR', {
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
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING
    },
    PATERNO: {
        type: sequelize_1.DataTypes.STRING
    },
    MATERNO: {
        type: sequelize_1.DataTypes.STRING
    },
    ALIAS: {
        type: sequelize_1.DataTypes.STRING
    },
    EDAD: {
        type: sequelize_1.DataTypes.INTEGER
    },
    DOMICILIO: {
        type: sequelize_1.DataTypes.STRING
    },
    OTRO_DOMICILIO: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESOR_DENUNCIADO: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESOR_SERVIDOR_PUBLICO: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESOR_EXPERIENCIA_ARMAS: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESOR_CRIMEN_ORGANIZADO: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESOR_CARPETA_PENAL: {
        type: sequelize_1.DataTypes.STRING
    },
    NO_EXPEDIENTE: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESOR_SENTENCIA: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESOR_DETENIDO: {
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
    tableName: 'DATOS_AGRESOR',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_AGRESOR;
//# sourceMappingURL=DATOS_AGRESOR.js.map