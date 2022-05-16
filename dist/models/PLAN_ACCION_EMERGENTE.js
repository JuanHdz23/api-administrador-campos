"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const PLAN_ACCION_EMERGENTE = connection_1.default.define('PLAN_ACCION_EMERGENTE', {
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
    CANALIZO_TERAPIA: {
        type: sequelize_1.DataTypes.STRING
    },
    PROPUESTA_PLAN: {
        type: sequelize_1.DataTypes.STRING
    },
    PROPUESTA_CANALIZADA: {
        type: sequelize_1.DataTypes.STRING
    },
    GESTIONARON_PLAN: {
        type: sequelize_1.DataTypes.STRING
    },
    INCLUYO_BOLSA_TRABAJO: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDENCIA_APOYO: {
        type: sequelize_1.DataTypes.STRING
    },
    CONSIGUIO_TRABAJO: {
        type: sequelize_1.DataTypes.STRING
    },
    OFRECIO_MATERIAL_EDUCATIVO: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDENCIA_APOYO_EDUCATIVO: {
        type: sequelize_1.DataTypes.STRING
    },
    APOYO_DEPENDIENTES: {
        type: sequelize_1.DataTypes.STRING
    },
    TIPO_APOYO_DEPENDIENTES: {
        type: sequelize_1.DataTypes.STRING
    },
    TIPO_APOYO_DEPENDIENTES_2: {
        type: sequelize_1.DataTypes.STRING
    },
    TIPO_APOYO_DEPENDIENTES_3: {
        type: sequelize_1.DataTypes.STRING
    },
    TIPO_APOYO_DEPENDIENTES_4: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDENCIA_APOYO_DEPENDIENTES: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDENCIA_APOYO_DEPENDIENTES_2: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDENCIA_APOYO_DEPENDIENTES_3: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDENCIA_APOYO_DEPENDIENTES_4: {
        type: sequelize_1.DataTypes.STRING
    },
    DEPENDENCIA_APOYO_DEPENDIENTES_5: {
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
    tableName: 'PLAN_ACCION_EMERGENTE',
    timestamps: false,
    freezeTableName: true
});
exports.default = PLAN_ACCION_EMERGENTE;
//# sourceMappingURL=PLAN_ACCION_EMERGENTE.js.map