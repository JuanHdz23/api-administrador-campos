"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_HECHO = connection_1.default.define('DATOS_HECHO', {
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
    SINTESIS_HECHOS: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_AGRESION: {
        type: sequelize_1.DataTypes.STRING
    },
    FAMILIAR_INVOLUCRADO: {
        type: sequelize_1.DataTypes.STRING
    },
    VICTIMAS_INDIRECTAS: {
        type: sequelize_1.DataTypes.STRING
    },
    MUNICIPIO_HECHO: {
        type: sequelize_1.DataTypes.STRING
    },
    OTRO_MUNICIPIO_HECHO: {
        type: sequelize_1.DataTypes.STRING
    },
    DOMICILIO_HECHO: {
        type: sequelize_1.DataTypes.STRING
    },
    COLONIA_HECHO: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESION_ZONA: {
        type: sequelize_1.DataTypes.STRING
    },
    OTRAS_MODALIDADES: {
        type: sequelize_1.DataTypes.STRING
    },
    PODER_AGRESOR_USUARIA: {
        type: sequelize_1.DataTypes.STRING
    },
    VIOLENCIA_PREVIA: {
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
    tableName: 'DATOS_HECHO',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_HECHO;
//# sourceMappingURL=DATOS_HECHO.js.map