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
exports.putCita = exports.postCita = exports.getExpedienteClaveLugar = exports.getCita = exports.getCitas = void 0;
const DATOS_PRINCIPALES_1 = __importDefault(require("../models/DATOS_PRINCIPALES"));
const ACTIVIDADES_1 = require("./ACTIVIDADES");
const getCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const citas = yield DATOS_PRINCIPALES_1.default.findAll();
    res.json({
        citas
    });
});
exports.getCitas = getCitas;
const getCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const expediente = yield DATOS_PRINCIPALES_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!expediente) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        expediente
    });
});
exports.getCita = getCita;
const getExpedienteClaveLugar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR } = req.params;
    const expediente = yield DATOS_PRINCIPALES_1.default.findAll({
        where: {
            CLAVE_LUGAR
        }
    });
    if (!expediente) {
        res.status(404).json({
            msg: `No existe información con CLAVE LUGAR ${CLAVE_LUGAR}`
        });
    }
    res.json({
        expediente
    });
});
exports.getExpedienteClaveLugar = getExpedienteClaveLugar;
const zeroFill = (number, width) => {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // siempre devuelve tipo cadena
};
const postCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const year = new Date().getFullYear().toString();
        body.ANIO = year;
        yield DATOS_PRINCIPALES_1.default.findOne({
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
        if (body.FECHA_CITA) {
            const fecha_cita = body.FECHA_CITA + ':00';
            body.FECHA_CITA = fecha_cita;
        }
        else {
            body.FECHA_CITA = null;
        }
        if (body.FECHA_APERTURA) {
            const fecha_apertura = body.FECHA_APERTURA + ':00';
            body.FECHA_APERTURA = fecha_apertura;
        }
        else {
            body.FECHA_APERTURA = null;
        }
        const date = new Date().toISOString();
        body.FCH_REG = date;
        body.FCH_UAC = date;
        const cita = new DATOS_PRINCIPALES_1.default(body);
        yield cita.save();
        const actividad = 'Se creo registro de cita';
        (0, ACTIVIDADES_1.postActividades)(body, actividad, '', '');
        res.json({
            cita
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.postCita = postCita;
const putCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL, USUARIO } = req.params;
    const { body } = req;
    try {
        const cita = yield DATOS_PRINCIPALES_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!cita) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_CITA) {
            const fecha_cita = body.FECHA_CITA + ':00';
            body.FECHA_CITA = fecha_cita;
        }
        if (body.FECHA_APERTURA) {
            const fecha_apertura = body.FECHA_APERTURA + ':00';
            body.FECHA_APERTURA = fecha_apertura;
        }
        yield cita.update(body);
        body.CLAVE_LUGAR = CLAVE_LUGAR;
        body.ANIO = ANIO;
        body.CONTROL = CONTROL;
        body.USUARIO = USUARIO;
        const actividad = 'Se modifico registro de cita';
        (0, ACTIVIDADES_1.postActividades)(body, actividad, '', '');
        res.json({
            cita
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putCita = putCita;
//# sourceMappingURL=DATOS_PRINCIPALES.js.map