"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_EXPEDIENTE = connection_1.default.define('DATOS_EXPEDIENTE', {
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
    NUC: {
        type: sequelize_1.DataTypes.STRING
    },
    CRIMINOLOGO_INICIAL: {
        type: sequelize_1.DataTypes.STRING
    },
    CRIMINOLOGO_FINAL: {
        type: sequelize_1.DataTypes.STRING
    },
    REVISOR: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_REGISTRO: {
        type: sequelize_1.DataTypes.STRING,
    },
    NUEVO_INGRESO_REVISION: {
        type: sequelize_1.DataTypes.STRING
    },
    ESTATUS: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_DENUNCIA: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA_2: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA_3: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA_4: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA_5: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA_6: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA_7: {
        type: sequelize_1.DataTypes.STRING
    },
    DELITO_CONCULA_8: {
        type: sequelize_1.DataTypes.STRING
    },
    RESPUESTAS_TABLA: {
        type: sequelize_1.DataTypes.STRING
    },
    DICTAMEN_FINAL: {
        type: sequelize_1.DataTypes.STRING
    },
    FOLIO_USUARIA: {
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
    tableName: 'DATOS_EXPEDIENTES',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_EXPEDIENTE;
//# sourceMappingURL=DATOS_EXPEDIENTE.js.map