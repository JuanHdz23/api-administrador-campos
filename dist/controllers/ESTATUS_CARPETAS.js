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
exports.putEstatusCarpeta = exports.postEstatusCarpeta = exports.getEstatusCarpeta = exports.getEstatusCarpetas = void 0;
const ESTATUS_CARPETA_1 = __importDefault(require("../models/ESTATUS_CARPETA"));
const getEstatusCarpetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estatusCarpetas = yield ESTATUS_CARPETA_1.default.findAll();
    res.json({
        estatusCarpetas
    });
});
exports.getEstatusCarpetas = getEstatusCarpetas;
const getEstatusCarpeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const estatusCarpeta = yield ESTATUS_CARPETA_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!estatusCarpeta) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        estatusCarpeta
    });
});
exports.getEstatusCarpeta = getEstatusCarpeta;
const postEstatusCarpeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existeEstatusCarpeta = yield ESTATUS_CARPETA_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existeEstatusCarpeta) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            if (body.FECHA_RECEPCION) {
                const fecha_recepcion = body.FECHA_RECEPCION + ':00';
                body.FECHA_RECEPCION = fecha_recepcion;
            }
            if (body.FECHA_JUDICIALIZACION) {
                const fecha_judicializacion = body.FECHA_JUDICIALIZACION + ':00';
                body.FECHA_JUDICIALIZACION = fecha_judicializacion;
            }
            const estatusCarpeta = new ESTATUS_CARPETA_1.default(body);
            yield estatusCarpeta.save();
            res.json({
                estatusCarpeta
            });
        }
        else {
            return res.status(400).json({
                msg: `No esta llegando CLAVE, ANIO o CONTROL completo`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.postEstatusCarpeta = postEstatusCarpeta;
const putEstatusCarpeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const estatusCarpeta = yield ESTATUS_CARPETA_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!estatusCarpeta) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_RECEPCION) {
            const fecha_recepcion = body.FECHA_RECEPCION + ':00';
            body.FECHA_RECEPCION = fecha_recepcion;
        }
        if (body.FECHA_JUDICIALIZACION) {
            const fecha_judicializacion = body.FECHA_JUDICIALIZACION + ':00';
            body.FECHA_JUDICIALIZACION = fecha_judicializacion;
        }
        yield estatusCarpeta.update(body);
        res.json({
            estatusCarpeta
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putEstatusCarpeta = putEstatusCarpeta;
//# sourceMappingURL=ESTATUS_CARPETAS.js.map