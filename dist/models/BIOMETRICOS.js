"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const BIOMETRICOS = connection_1.default.define('BIOMETRICOS', {
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
    RECIP: {
        type: sequelize_1.DataTypes.DATE
    },
    DOCS_RECIP: {
        type: sequelize_1.DataTypes.DATE
    },
    HUELLAS: {
        type: sequelize_1.DataTypes.DATE
    },
    CUIP: {
        type: sequelize_1.DataTypes.DATE
    },
    CIB_RECIP: {
        type: sequelize_1.DataTypes.DATE
    },
    RNPSP: {
        type: sequelize_1.DataTypes.DATE
    },
    DOCS_RNPSP: {
        type: sequelize_1.DataTypes.DATE
    },
    CIB_RNPSP: {
        type: sequelize_1.DataTypes.DATE
    },
    NO_CIB: {
        type: sequelize_1.DataTypes.STRING
    },
    FOTOS: {
        type: sequelize_1.DataTypes.STRING
    },
    CARGO_FOTOS: {
        type: sequelize_1.DataTypes.DATE
    },
    FICHA_HUELLAS: {
        type: sequelize_1.DataTypes.DATE
    },
    VOZ: {
        type: sequelize_1.DataTypes.DATE
    },
    LIGA_FACIAL: {
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
    tableName: 'BIOMETRICOS',
    timestamps: false,
    freezeTableName: true
});
exports.default = BIOMETRICOS;
//# sourceMappingURL=BIOMETRICOS.js.map