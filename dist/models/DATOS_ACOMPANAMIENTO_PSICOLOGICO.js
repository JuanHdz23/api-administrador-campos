"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_ACOMPANAMIENTO_PSICOLOGICO = connection_1.default.define('DATOS_ACOMPANAMIENTO_PSICOLOGICO', {
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
    FECHA_NOTIFICACION: {
        type: sequelize_1.DataTypes.STRING
    },
    SOLICITO_CONTENCION: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_REALIZO_DICTAMEN: {
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
    FECHA_ENTREGO_DICTAMEN: {
        type: sequelize_1.DataTypes.STRING
    },
    AÑOS_2: {
        type: sequelize_1.DataTypes.INTEGER
    },
    MESES_2: {
        type: sequelize_1.DataTypes.INTEGER
    },
    DIAS_2: {
        type: sequelize_1.DataTypes.INTEGER
    },
    HORAS_2: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ESTATUS_2: {
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
    tableName: 'DATOS_ACOMPANAMIENTO_PSICOLOGICO',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_ACOMPANAMIENTO_PSICOLOGICO;
//# sourceMappingURL=DATOS_ACOMPANAMIENTO_PSICOLOGICO.js.map