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
exports.putExpediente = exports.postExpediente = exports.getExpedienteClaveLugar = exports.getExpediente = exports.getExpedientes = void 0;
const DATOS_EXPEDIENTE_1 = __importDefault(require("../models/DATOS_EXPEDIENTE"));
const getExpedientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expedientes = yield DATOS_EXPEDIENTE_1.default.findAll();
    res.json({
        expedientes
    });
});
exports.getExpedientes = getExpedientes;
const getExpediente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const expediente = yield DATOS_EXPEDIENTE_1.default.findOne({
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
exports.getExpediente = getExpediente;
const getExpedienteClaveLugar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR } = req.params;
    const expediente = yield DATOS_EXPEDIENTE_1.default.findAll({
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
const postExpediente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const year = new Date().getFullYear().toString();
        body.ANIO = year;
        const lastId = yield DATOS_EXPEDIENTE_1.default.findOne({
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
        const expediente = new DATOS_EXPEDIENTE_1.default(body);
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
const putExpediente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const expediente = yield DATOS_EXPEDIENTE_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!expediente) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_REGISTRO) {
            const fecha_registro = body.FECHA_REGISTRO + ':00';
            body.FECHA_REGISTRO = fecha_registro;
        }
        if (body.FECHA_DENUNCIA) {
            const fecha_denuncia = body.FECHA_DENUNCIA + ':00';
            body.FECHA_DENUNCIA = fecha_denuncia;
        }
        yield expediente.update(body);
        res.json({
            expediente
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putExpediente = putExpediente;
//# sourceMappingURL=DATOS_EXPEDIENTES.js.map