"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const INFORME_MEDICO = connection_1.default.define('INFORME_MEDICO', {
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
    FECHA_ATENCION: {
        type: sequelize_1.DataTypes.STRING
    },
    ENTIDAD_ATENDIO: {
        type: sequelize_1.DataTypes.STRING
    },
    PERSONAL_ATENDIO: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_REPORTE: {
        type: sequelize_1.DataTypes.STRING
    },
    PRESENTA_LESIONES: {
        type: sequelize_1.DataTypes.STRING
    },
    NIVELES_LESIONES: {
        type: sequelize_1.DataTypes.STRING
    },
    CLASIFICACION_LESIONES: {
        type: sequelize_1.DataTypes.STRING
    },
    LESION_CAUSO_ARMA: {
        type: sequelize_1.DataTypes.STRING
    },
    TIPO_OBJETO_LESION: {
        type: sequelize_1.DataTypes.STRING
    },
    REQUIRIO_ATENCION: {
        type: sequelize_1.DataTypes.STRING
    },
    LESIONES_ANTIGUAS: {
        type: sequelize_1.DataTypes.STRING
    },
    SEGUIMIENTO_LESIONES: {
        type: sequelize_1.DataTypes.STRING
    },
    AGRESION_SEXUAL: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_AGRESION: {
        type: sequelize_1.DataTypes.STRING
    },
    APLICO_NOM046: {
        type: sequelize_1.DataTypes.STRING
    },
    PRESCIBIO_PROFILACTICOS: {
        type: sequelize_1.DataTypes.STRING
    },
    NOTIFICO_MP: {
        type: sequelize_1.DataTypes.STRING
    },
    RECABARON_PRUEBAS: {
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
    tableName: 'INFORME_MEDICO',
    timestamps: false,
    freezeTableName: true
});
exports.default = INFORME_MEDICO;
//# sourceMappingURL=INFORME_MEDICO.js.map