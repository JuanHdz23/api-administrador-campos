"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const CATALOGO_PUESTOS = connection_1.default.define('CATALOGO_PUESTOS', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    ADSCRIPCION: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    PUESTO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    HABILITADO: {
        type: sequelize_1.DataTypes.CHAR,
    }
}, {
    tableName: 'CATALOGO_PUESTOS',
    timestamps: false,
    freezeTableName: true
});
exports.default = CATALOGO_PUESTOS;
//# sourceMappingURL=CATALOGO_PUESTOS.js.map