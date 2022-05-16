"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_INTEGRACION_CARPETA = connection_1.default.define('DATOS_INTEGRACION_CARPETA', {
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
    ELEMENTOS_PRUEBA_DISPONIBLES: {
        type: sequelize_1.DataTypes.STRING
    },
    ELEMENTOS_PRUEBA_DISPONIBLES_2: {
        type: sequelize_1.DataTypes.STRING
    },
    OBTENER_MAYORES_PRUEBAS: {
        type: sequelize_1.DataTypes.STRING
    },
    COMENTARIOS_PRUEBA: {
        type: sequelize_1.DataTypes.STRING
    },
    SUSPENCION_CONDICIONAL: {
        type: sequelize_1.DataTypes.STRING
    },
    OTORGO_PERDON: {
        type: sequelize_1.DataTypes.STRING
    },
    AUTORIDAD_SOLICITO_DILIGENCIA: {
        type: sequelize_1.DataTypes.STRING
    },
    AUTORIDAD_SOLICITO_DILIGENCIA_2: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_OFICIO_DILIGENCIA: {
        type: sequelize_1.DataTypes.STRING
    },
    DEBILIDAD_INVESTIGACION: {
        type: sequelize_1.DataTypes.STRING
    },
    COMENTARIOS_INVESTIGACION: {
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
    tableName: 'DATOS_INTEGRACION_CARPETA',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_INTEGRACION_CARPETA;
//# sourceMappingURL=DATOS_INTEGRACION_CARPETA.js.map