import { DataType, DataTypes } from 'sequelize';
import db from '../db/connection';

const CLIENTES = db.define('client', {
    id : {
        type: DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },
	client : {
        type: DataTypes.CHAR,
    },
	name : {
        type: DataTypes.STRING
    },
	location : {
        type: DataTypes.STRING
    },
	polygon : {
        type: DataTypes.GEOMETRY
    },
    active : {
        type: DataTypes.CHAR
    }
},{
	tableName: 'client',
	timestamps: false,
	freezeTableName: true
});

export default CLIENTES;