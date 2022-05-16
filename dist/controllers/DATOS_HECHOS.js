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
exports.putDatosHecho = exports.postDatosHecho = exports.getDatosHecho = exports.getDatosHechos = void 0;
const DATOS_HECHO_1 = __importDefault(require("../models/DATOS_HECHO"));
const getDatosHechos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datosHechos = yield DATOS_HECHO_1.default.findAll();
    res.json({
        datosHechos
    });
});
exports.getDatosHechos = getDatosHechos;
const getDatosHecho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const datosHecho = yield DATOS_HECHO_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!datosHecho) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        datosHecho
    });
});
exports.getDatosHecho = getDatosHecho;
const postDatosHecho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existeDatosHecho = yield DATOS_HECHO_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existeDatosHecho) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            if (body.FECHA_AGRESION) {
                const fecha_agresion = body.FECHA_AGRESION + ':00';
                body.FECHA_AGRESION = fecha_agresion;
            }
            const datosHecho = new DATOS_HECHO_1.default(body);
            yield datosHecho.save();
            res.json({
                datosHecho
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
exports.postDatosHecho = postDatosHecho;
const putDatosHecho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const datosHecho = yield DATOS_HECHO_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!datosHecho) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_AGRESION) {
            const fecha_agresion = body.FECHA_AGRESION + ':00';
            body.FECHA_AGRESION = fecha_agresion;
        }
        yield datosHecho.update(body);
        res.json({
            datosHecho
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putDatosHecho = putDatosHecho;
//# sourceMappingURL=DATOS_HECHOS.js.map