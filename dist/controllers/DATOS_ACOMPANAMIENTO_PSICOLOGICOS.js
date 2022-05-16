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
exports.putDatosAcompanamientoPsicologico = exports.postDatosAcompanamientoPsicologico = exports.getDatosAcompanamientoPsicologico = exports.getDatosAcompanamientoPsicologicos = void 0;
const DATOS_ACOMPANAMIENTO_PSICOLOGICO_1 = __importDefault(require("../models/DATOS_ACOMPANAMIENTO_PSICOLOGICO"));
const getDatosAcompanamientoPsicologicos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datosAcompanamientoPsicologicos = yield DATOS_ACOMPANAMIENTO_PSICOLOGICO_1.default.findAll();
    res.json({
        datosAcompanamientoPsicologicos
    });
});
exports.getDatosAcompanamientoPsicologicos = getDatosAcompanamientoPsicologicos;
const getDatosAcompanamientoPsicologico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const datosAcompanamientoPsicologico = yield DATOS_ACOMPANAMIENTO_PSICOLOGICO_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!datosAcompanamientoPsicologico) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        datosAcompanamientoPsicologico
    });
});
exports.getDatosAcompanamientoPsicologico = getDatosAcompanamientoPsicologico;
const postDatosAcompanamientoPsicologico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existeDatosAcompanamientoPsicologico = yield DATOS_ACOMPANAMIENTO_PSICOLOGICO_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existeDatosAcompanamientoPsicologico) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            if (body.FECHA_NOTIFICACION) {
                const fecha_notificacion = body.FECHA_NOTIFICACION + ':00';
                body.FECHA_NOTIFICACION = fecha_notificacion;
            }
            if (body.FECHA_REALIZO_DICTAMEN) {
                const fecha_realizo_dictamen = body.FECHA_REALIZO_DICTAMEN + ':00';
                body.FECHA_REALIZO_DICTAMEN = fecha_realizo_dictamen;
            }
            if (body.FECHA_ENTREGO_DICTAMEN) {
                const fecha_entrego_dictamen = body.FECHA_ENTREGO_DICTAMEN + ':00';
                body.FECHA_ENTREGO_DICTAMEN = fecha_entrego_dictamen;
            }
            const datosAcompanamientoPsicologico = new DATOS_ACOMPANAMIENTO_PSICOLOGICO_1.default(body);
            yield datosAcompanamientoPsicologico.save();
            res.json({
                datosAcompanamientoPsicologico
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
exports.postDatosAcompanamientoPsicologico = postDatosAcompanamientoPsicologico;
const putDatosAcompanamientoPsicologico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const datosAcompanamientoPsicologico = yield DATOS_ACOMPANAMIENTO_PSICOLOGICO_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!datosAcompanamientoPsicologico) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_NOTIFICACION) {
            const fecha_notificacion = body.FECHA_NOTIFICACION + ':00';
            body.FECHA_NOTIFICACION = fecha_notificacion;
        }
        if (body.FECHA_REALIZO_DICTAMEN) {
            const fecha_realizo_dictamen = body.FECHA_REALIZO_DICTAMEN + ':00';
            body.FECHA_REALIZO_DICTAMEN = fecha_realizo_dictamen;
        }
        if (body.FECHA_ENTREGO_DICTAMEN) {
            const fecha_entrego_dictamen = body.FECHA_ENTREGO_DICTAMEN + ':00';
            body.FECHA_ENTREGO_DICTAMEN = fecha_entrego_dictamen;
        }
        yield datosAcompanamientoPsicologico.update(body);
        res.json({
            datosAcompanamientoPsicologico
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.putDatosAcompanamientoPsicologico = putDatosAcompanamientoPsicologico;
//# sourceMappingURL=DATOS_ACOMPANAMIENTO_PSICOLOGICOS.js.map