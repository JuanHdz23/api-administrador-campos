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
exports.putDatosOrdenesMedidasProteccion = exports.postDatosOrdenesMedidasProteccion = exports.getDatosOrdenesMedidasProteccion = exports.getDatosOrdenesMedidasProtecciones = void 0;
const DATOS_ORDENES_MEDIDAS_PROTECCION_1 = __importDefault(require("../models/DATOS_ORDENES_MEDIDAS_PROTECCION"));
const getDatosOrdenesMedidasProtecciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datosOrdenesMedidasProtecciones = yield DATOS_ORDENES_MEDIDAS_PROTECCION_1.default.findAll();
    res.json({
        datosOrdenesMedidasProtecciones
    });
});
exports.getDatosOrdenesMedidasProtecciones = getDatosOrdenesMedidasProtecciones;
const getDatosOrdenesMedidasProteccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const datosOrdenesMedidasProteccion = yield DATOS_ORDENES_MEDIDAS_PROTECCION_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!datosOrdenesMedidasProteccion) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        datosOrdenesMedidasProteccion
    });
});
exports.getDatosOrdenesMedidasProteccion = getDatosOrdenesMedidasProteccion;
const postDatosOrdenesMedidasProteccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existeDatosOrdenesMedidasProteccion = yield DATOS_ORDENES_MEDIDAS_PROTECCION_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existeDatosOrdenesMedidasProteccion) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            if (body.FECHA_SOLICITUD_MEDIDA) {
                const fecha_solicitud_medida = body.FECHA_SOLICITUD_MEDIDA + ':00';
                body.FECHA_SOLICITUD_MEDIDA = fecha_solicitud_medida;
            }
            if (body.FECHA_MEDIDA_2) {
                const fecha_medida_2 = body.FECHA_MEDIDA_2 + ':00';
                body.FECHA_MEDIDA_2 = fecha_medida_2;
            }
            if (body.FECHA_OTORGO_MEDIDA) {
                const fecha_otorgo_medida = body.FECHA_OTORGO_MEDIDA + ':00';
                body.FECHA_OTORGO_MEDIDA = fecha_otorgo_medida;
            }
            if (body.FECHA_EJECUCION) {
                const fecha_ejecucion = body.FECHA_EJECUCION + ':00';
                body.FECHA_EJECUCION = fecha_ejecucion;
            }
            if (body.FECHA_INICIO_MEDIDA) {
                const fecha_inicio_medida = body.FECHA_INICIO_MEDIDA + ':00';
                body.FECHA_INICIO_MEDIDA = fecha_inicio_medida;
            }
            if (body.FECHA_PRONOSTICO_MEDIDA) {
                const fecha_pronostico_medida = body.FECHA_PRONOSTICO_MEDIDA + ':00';
                body.FECHA_PRONOSTICO_MEDIDA = fecha_pronostico_medida;
            }
            if (body.FECHA_ULTIMO_REPORTE) {
                const fecha_ultimo_reporte = body.FECHA_ULTIMO_REPORTE + ':00';
                body.FECHA_ULTIMO_REPORTE = fecha_ultimo_reporte;
            }
            const datosOrdenesMedidasProteccion = new DATOS_ORDENES_MEDIDAS_PROTECCION_1.default(body);
            yield datosOrdenesMedidasProteccion.save();
            res.json({
                datosOrdenesMedidasProteccion
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
exports.postDatosOrdenesMedidasProteccion = postDatosOrdenesMedidasProteccion;
const putDatosOrdenesMedidasProteccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const datosOrdenesMedidasProteccion = yield DATOS_ORDENES_MEDIDAS_PROTECCION_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!datosOrdenesMedidasProteccion) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_SOLICITUD_MEDIDA) {
            const fecha_solicitud_medida = body.FECHA_SOLICITUD_MEDIDA + ':00';
            body.FECHA_SOLICITUD_MEDIDA = fecha_solicitud_medida;
        }
        if (body.FECHA_MEDIDA_2) {
            const fecha_medida_2 = body.FECHA_MEDIDA_2 + ':00';
            body.FECHA_MEDIDA_2 = fecha_medida_2;
        }
        if (body.FECHA_OTORGO_MEDIDA) {
            const fecha_otorgo_medida = body.FECHA_OTORGO_MEDIDA + ':00';
            body.FECHA_OTORGO_MEDIDA = fecha_otorgo_medida;
        }
        if (body.FECHA_EJECUCION) {
            const fecha_ejecucion = body.FECHA_EJECUCION + ':00';
            body.FECHA_EJECUCION = fecha_ejecucion;
        }
        if (body.FECHA_INICIO_MEDIDA) {
            const fecha_inicio_medida = body.FECHA_INICIO_MEDIDA + ':00';
            body.FECHA_INICIO_MEDIDA = fecha_inicio_medida;
        }
        if (body.FECHA_PRONOSTICO_MEDIDA) {
            const fecha_pronostico_medida = body.FECHA_PRONOSTICO_MEDIDA + ':00';
            body.FECHA_PRONOSTICO_MEDIDA = fecha_pronostico_medida;
        }
        if (body.FECHA_ULTIMO_REPORTE) {
            const fecha_ultimo_reporte = body.FECHA_ULTIMO_REPORTE + ':00';
            body.FECHA_ULTIMO_REPORTE = fecha_ultimo_reporte;
        }
        yield datosOrdenesMedidasProteccion.update(body);
        res.json({
            datosOrdenesMedidasProteccion
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.putDatosOrdenesMedidasProteccion = putDatosOrdenesMedidasProteccion;
//# sourceMappingURL=DATOS_ORDENES_MEDIDAS_PROTECCIONES.js.map