"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const CLIENTES = connection_1.default.define('client', {
    id: {
        type: sequelize_1.DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },
    client: {
        type: sequelize_1.DataTypes.CHAR,
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    location: {
        type: sequelize_1.DataTypes.STRING
    },
    polygon: {
        type: sequelize_1.DataTypes.GEOMETRY
    },
    active: {
        type: sequelize_1.DataTypes.CHAR
    }
}, {
    tableName: 'client',
    timestamps: false,
    freezeTableName: true
});
exports.default = CLIENTES;
//# sourceMappingURL=CLIENTES.js.map