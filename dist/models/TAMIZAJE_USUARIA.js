"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const TAMIZAJE_USUARIA = connection_1.default.define('TAMIZAJE_USUARIA', {
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
    APLICO_TAMIZAJE: {
        type: sequelize_1.DataTypes.STRING
    },
    CLASIFICO_VAR: {
        type: sequelize_1.DataTypes.STRING
    },
    VARIABLES_AFIRMATIVAS: {
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
    tableName: 'TAMIZAJE_USUARIA',
    timestamps: false,
    freezeTableName: true
});
exports.default = TAMIZAJE_USUARIA;
//# sourceMappingURL=TAMIZAJE_USUARIA.js.map