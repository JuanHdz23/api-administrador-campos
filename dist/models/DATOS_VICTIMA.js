"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DATOS_VICTIMA = connection_1.default.define('DATOS_VICTIMA', {
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
    NOMBRE: {
        type: sequelize_1.DataTypes.STRING
    },
    PATERNO: {
        type: sequelize_1.DataTypes.STRING
    },
    MATERNO: {
        type: sequelize_1.DataTypes.STRING
    },
    EDAD: {
        type: sequelize_1.DataTypes.INTEGER
    },
    DOMICILIO: {
        type: sequelize_1.DataTypes.STRING
    },
    OTRO_DOMICILIO: {
        type: sequelize_1.DataTypes.STRING
    },
    TELEFONO_DIRECTO: {
        type: sequelize_1.DataTypes.STRING
    },
    TELEFONO_INDIRECTO: {
        type: sequelize_1.DataTypes.STRING
    },
    RED_SOCIAL: {
        type: sequelize_1.DataTypes.STRING
    },
    USUARIO_RED_SOCIAL: {
        type: sequelize_1.DataTypes.STRING
    },
    SITUACION_VULNERABILIDAD: {
        type: sequelize_1.DataTypes.STRING
    },
    INTERSECCIONALIDAD: {
        type: sequelize_1.DataTypes.STRING
    },
    ENFERMEDAD: {
        type: sequelize_1.DataTypes.STRING
    },
    VINCULO_USUARIA_AGRESOR: {
        type: sequelize_1.DataTypes.STRING
    },
    DENUNCIA_VAR: {
        type: sequelize_1.DataTypes.STRING
    },
    HIJOS_MENORES: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDIENTES_ECONOMICOS: {
        type: sequelize_1.DataTypes.STRING
    },
    PROGRAMA_SOCIAL: {
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
    tableName: 'DATOS_VICTIMA',
    timestamps: false,
    freezeTableName: true
});
exports.default = DATOS_VICTIMA;
//# sourceMappingURL=DATOS_VICTIMA.js.map