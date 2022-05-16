"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const RNPSP = connection_1.default.define('RNPSP', {
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
    CUIP: {
        type: sequelize_1.DataTypes.STRING
    },
    FECHA_CREACION_CUIP: {
        type: sequelize_1.DataTypes.DATE
    },
    FECHA_ENTREGA_CUIP: {
        type: sequelize_1.DataTypes.DATE
    },
    DOC_ENTREGA_CUIP: {
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
    tableName: 'RNPSP',
    timestamps: false,
    freezeTableName: true
});
exports.default = RNPSP;
//# sourceMappingURL=RNPSP.js.map