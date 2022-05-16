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
exports.putDatosIntegracionCarpeta = exports.postDatosIntegracionCarpeta = exports.getDatosIntegracionCarpeta = exports.getDatosIntegracionCarpetas = void 0;
const DATOS_INTEGRACION_CARPETA_1 = __importDefault(require("../models/DATOS_INTEGRACION_CARPETA"));
const getDatosIntegracionCarpetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datosIntegracionCarpetas = yield DATOS_INTEGRACION_CARPETA_1.default.findAll();
    res.json({
        datosIntegracionCarpetas
    });
});
exports.getDatosIntegracionCarpetas = getDatosIntegracionCarpetas;
const getDatosIntegracionCarpeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const datosIntegracionCarpeta = yield DATOS_INTEGRACION_CARPETA_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!datosIntegracionCarpeta) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        datosIntegracionCarpeta
    });
});
exports.getDatosIntegracionCarpeta = getDatosIntegracionCarpeta;
const postDatosIntegracionCarpeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existeDatosIntegracionCarpeta = yield DATOS_INTEGRACION_CARPETA_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existeDatosIntegracionCarpeta) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            if (body.FECHA_OFICIO_DILIGENCIA) {
                const fecha_oficio_diligencia = body.FECHA_OFICIO_DILIGENCIA + ':00';
                body.FECHA_OFICIO_DILIGENCIA = fecha_oficio_diligencia;
            }
            const datosIntegracionCarpeta = new DATOS_INTEGRACION_CARPETA_1.default(body);
            yield datosIntegracionCarpeta.save();
            res.json({
                datosIntegracionCarpeta
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
exports.postDatosIntegracionCarpeta = postDatosIntegracionCarpeta;
const putDatosIntegracionCarpeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const datosIntegracionCarpeta = yield DATOS_INTEGRACION_CARPETA_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!datosIntegracionCarpeta) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_OFICIO_DILIGENCIA) {
            const fecha_oficio_diligencia = body.FECHA_OFICIO_DILIGENCIA + ':00';
            body.FECHA_OFICIO_DILIGENCIA = fecha_oficio_diligencia;
        }
        yield datosIntegracionCarpeta.update(body);
        res.json({
            datosIntegracionCarpeta
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.putDatosIntegracionCarpeta = putDatosIntegracionCarpeta;
//# sourceMappingURL=DATOS_INTEGRACION_CARPETAS.js.map