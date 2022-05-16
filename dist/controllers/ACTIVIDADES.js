"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postExpediente = exports.postActividades = exports.getActividadesId = void 0;
const ACTIVIDADES_1 = __importDefault(require("../models/ACTIVIDADES"));
// export const getActividades = async( req: Request, res: Response ) => {
//     const actividades = await ACTIVIDAD.findAll();
//     res.json({
//         actividades
//     });
// };
const getActividadesId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const actividades = yield ACTIVIDADES_1.default.findAll({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!actividades) {
        res.status(404).json({
            msg: `No existen actividades con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        actividades
    });
});
exports.getActividadesId = getActividadesId;
const zeroFill = (number, width) => {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // siempre devuelve tipo cadena
};
const postActividades = (body, act, referencia = '', observaciones = '') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CLAVE_LUGAR, ANIO, CONTROL, USUARIO } = body;
        yield ACTIVIDADES_1.default.findOne({
            raw: true,
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            },
            order: [
                ['ID', 'DESC']
            ]
        }).then((data) => {
            if (!data) {
                const id = 1;
                body.ID = id;
                return true;
            }
            const id = parseInt(data['ID']) + 1;
            body.ID = id;
        });
        const fecha = new Date();
        const actividades = {
            CLAVE_LUGAR,
            ANIO,
            CONTROL,
            ID: body.ID,
            CLAVE_EMPLEADO: USUARIO,
            FECHA_ACTIVIDAD: fecha,
            ACTIVIDAD: act,
            REFERENCIA: referencia,
            OBSERVACIONES: observaciones,
            USUARIO,
            FCH_REG: fecha,
            FCH_UAC: fecha
        };
        const actividad = new ACTIVIDADES_1.default(actividades);
        yield actividad.save();
    }
    catch (error) {
        return error;
    }
});
exports.postActividades = postActividades;
const postExpediente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const year = new Date().getFullYear().toString();
        body.ANIO = year;
        const lastId = yield ACTIVIDADES_1.default.findOne({
            raw: true,
            where: {
                CLAVE_LUGAR: body.CLAVE_LUGAR,
                ANIO: year,
            },
            order: [
                ['CONTROL', 'DESC']
            ]
        }).then((data) => {
            if (!data) {
                const control = 1;
                body.CONTROL = zeroFill(control, 5);
                return true;
            }
            const control = parseInt(data['CONTROL']) + 1;
            body.CONTROL = zeroFill(control, 5);
        });
        if (body.FECHA_REGISTRO) {
            const fecha_registro = body.FECHA_REGISTRO + ':00';
            body.FECHA_REGISTRO = fecha_registro;
        }
        if (body.FECHA_DENUNCIA) {
            const fecha_denuncia = body.FECHA_DENUNCIA + ':00';
            body.FECHA_DENUNCIA = fecha_denuncia;
        }
        const expediente = new ACTIVIDADES_1.default(body);
        yield expediente.save();
        res.json({
            expediente
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.postExpediente = postExpediente;
//# sourceMappingURL=ACTIVIDADES.js.map