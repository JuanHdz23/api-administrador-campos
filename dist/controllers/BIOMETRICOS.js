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
exports.putBiometricos = exports.postBiometricos = exports.getBiometricosId = void 0;
const BIOMETRICOS_1 = __importDefault(require("../models/BIOMETRICOS"));
const ACTIVIDADES_1 = require("../controllers/ACTIVIDADES");
const getBiometricosId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const biometricos = yield BIOMETRICOS_1.default.findAll({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!biometricos) {
        res.status(404).json({
            msg: `No existen biometricos con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        biometricos
    });
});
exports.getBiometricosId = getBiometricosId;
const zeroFill = (number, width) => {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // siempre devuelve tipo cadena
};
const cleanFecha = (date) => {
    if (date) {
        const fecha_limpia = date + ':00';
        return fecha_limpia;
    }
    else {
        return null;
    }
};
const postBiometricos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const year = new Date().getFullYear().toString();
        body.ANIO = year;
        yield BIOMETRICOS_1.default.findOne({
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
        body.RECIP = cleanFecha(body.RECIP);
        body.DOCS_RECIP = cleanFecha(body.DOCS_RECIP);
        body.HUELLAS = cleanFecha(body.HUELLAS);
        body.CUIP = cleanFecha(body.CUIP);
        body.CIB_RECIP = cleanFecha(body.CIB_RECIP);
        body.RNPSP = cleanFecha(body.RNPSP);
        body.DOCS_RNPSP = cleanFecha(body.DOCS_RNPSP);
        body.CIB_RNPSP = cleanFecha(body.CIB_RNPSP);
        body.CARGO_FOTOS = cleanFecha(body.CARGO_FOTOS);
        body.FICHA_HUELLAS = cleanFecha(body.FICHA_HUELLAS);
        body.VOZ = cleanFecha(body.VOZ);
        body.LIGA_FACIAL = cleanFecha(body.LIGA_FACIAL);
        const date = new Date().toISOString();
        body.FCH_REG = date;
        body.FCH_UAC = date;
        const biometricos = new BIOMETRICOS_1.default(body);
        yield biometricos.save();
        const actividad = 'Se creo registro de biométricos';
        ACTIVIDADES_1.postActividades(body, actividad);
        res.json({
            biometricos
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.postBiometricos = postBiometricos;
const putBiometricos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL, USUARIO } = req.params;
    const { body } = req;
    try {
        const biometricos = yield BIOMETRICOS_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!biometricos) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        yield biometricos.update(body);
        body.CLAVE_LUGAR = CLAVE_LUGAR;
        body.ANIO = ANIO;
        body.CONTROL = CONTROL;
        body.USUARIO = USUARIO;
        const actividad = 'Se modifico registro de biométricos';
        ACTIVIDADES_1.postActividades(body, actividad);
        res.json({
            biometricos
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putBiometricos = putBiometricos;
//# sourceMappingURL=BIOMETRICOS.js.map