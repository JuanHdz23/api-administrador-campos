"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const CATALOGO_ADSCRIPCION = connection_1.default.define('CATALOGO_ADSCRIPCION', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ADSCRIPCION: {
        type: sequelize_1.DataTypes.STRING
    },
    HABILITADO: {
        type: sequelize_1.DataTypes.CHAR,
    }
}, {
    tableName: 'CATALOGO_ADSCRIPCION',
    timestamps: false,
    freezeTableName: true
});
exports.default = CATALOGO_ADSCRIPCION;
//# sourceMappingURL=CATALOGO_ADSCRIPCION.js.map