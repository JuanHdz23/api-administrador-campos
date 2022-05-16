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
exports.putRnpsp = exports.postRnpsp = exports.getRnpspId = void 0;
const RNPSP_1 = __importDefault(require("../models/RNPSP"));
const getRnpspId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const rnpsp = yield RNPSP_1.default.findAll({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!rnpsp) {
        res.status(404).json({
            msg: `No existen rnpsp con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        rnpsp
    });
});
exports.getRnpspId = getRnpspId;
const zeroFill = (number, width) => {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // siempre devuelve tipo cadena
};
const postRnpsp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const year = new Date().getFullYear().toString();
        body.ANIO = year;
        yield AFIS.findOne({
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
        if (body.FECHA_ENTRADA) {
            const fecha_entrada = body.FECHA_ENTRADA + ':00';
            body.FECHA_ENTRADA = fecha_entrada;
        }
        else {
            body.FECHA_ENTRADA = null;
        }
        if (body.FECHA_SALIDA) {
            const fecha_salida = body.FECHA_SALIDA + ':00';
            body.FECHA_SALIDA = fecha_salida;
        }
        else {
            body.FECHA_SALIDA = null;
        }
        const date = new Date().toISOString();
        body.FCH_REG = date;
        body.FCH_UAC = date;
        const afis = new AFIS(body);
        yield afis.save();
        const actividad = 'Se creo registro de afis';
        postActividades(body, actividad, '', '');
        res.json({
            afis
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.postRnpsp = postRnpsp;
const putRnpsp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL, USUARIO } = req.params;
    const { body } = req;
    try {
        const afis = yield AFIS.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!afis) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        yield afis.update(body);
        body.CLAVE_LUGAR = CLAVE_LUGAR;
        body.ANIO = ANIO;
        body.CONTROL = CONTROL;
        body.USUARIO = USUARIO;
        const actividad = 'Se modifico registro de afis';
        postActividades(body, actividad);
        res.json({
            afis
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putRnpsp = putRnpsp;
//# sourceMappingURL=RNPSP.js.map