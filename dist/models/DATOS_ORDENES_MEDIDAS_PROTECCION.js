"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_ORDENES_MEDIDAS_PROTECCION = connection_1.default.define('DATOS_ORDENES_MEDIDAS_PROTECCION', {
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
    CONTIENE_ORDEN: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_SOLICITUD_MEDIDA: {
        type: sequelize_1.DataTypes.STRING
    },
    DICTARON_ORDEN: {
        type: sequelize_1.DataTypes.STRING
    },
    ARTICULO_ESTIPULA_ORDEN: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_MEDIDA_2: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_OTORGO_MEDIDA: {
        type: sequelize_1.DataTypes.STRING
    },
    ORGANO_RESPONSABLE: {
        type: sequelize_1.DataTypes.STRING
    },
    ORGANO_RESPONSABLE_2: {
        type: sequelize_1.DataTypes.STRING
    },
    ORGANO_RESPONSABLE_3: {
        type: sequelize_1.DataTypes.STRING
    },
    ORGANO_RESPONSABLE_4: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_EJECUCION: {
        type: sequelize_1.DataTypes.STRING
    },
    MEDIDA_RATIFICADA: {
        type: sequelize_1.DataTypes.STRING
    },
    VIGENCIA_MEDIDA: {
        type: sequelize_1.DataTypes.INTEGER
    },
    FECHA_INICIO_MEDIDA: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_PRONOSTICO_MEDIDA: {
        type: sequelize_1.DataTypes.STRING
    },
    ESTATUS_MEDIDA: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_ULTIMO_REPORTE: {
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
    tableName: 'DATOS_ORDENES_MEDIDAS_PROTECCION',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_ORDENES_MEDIDAS_PROTECCION;
//# sourceMappingURL=DATOS_ORDENES_MEDIDAS_PROTECCION.js.map