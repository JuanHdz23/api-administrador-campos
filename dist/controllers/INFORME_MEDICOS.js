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
exports.putInformeMedico = exports.postInformeMedico = exports.getInformeMedico = exports.getInformeMedicos = void 0;
const INFORME_MEDICO_1 = __importDefault(require("../models/INFORME_MEDICO"));
const getInformeMedicos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const informeMedicos = yield INFORME_MEDICO_1.default.findAll();
    res.json({
        informeMedicos
    });
});
exports.getInformeMedicos = getInformeMedicos;
const getInformeMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const informeMedico = yield INFORME_MEDICO_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!informeMedico) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        informeMedico
    });
});
exports.getInformeMedico = getInformeMedico;
const postInformeMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existeInformeMedico = yield INFORME_MEDICO_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existeInformeMedico) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            if (body.FECHA_ATENCION) {
                const fecha_atencion = body.FECHA_ATENCION + ':00';
                body.FECHA_ATENCION = fecha_atencion;
            }
            if (body.FECHA_REPORTE) {
                const fecha_reporte = body.FECHA_REPORTE + ':00';
                body.FECHA_REPORTE = fecha_reporte;
            }
            if (body.FECHA_AGRESION) {
                const fecha_agresion = body.FECHA_AGRESION + ':00';
                body.FECHA_AGRESION = fecha_agresion;
            }
            const informeMedico = new INFORME_MEDICO_1.default(body);
            yield informeMedico.save();
            res.json({
                informeMedico
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
exports.postInformeMedico = postInformeMedico;
const putInformeMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const informeMedico = yield INFORME_MEDICO_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!informeMedico) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        if (body.FECHA_ATENCION) {
            const fecha_atencion = body.FECHA_ATENCION + ':00';
            body.FECHA_ATENCION = fecha_atencion;
        }
        if (body.FECHA_REPORTE) {
            const fecha_reporte = body.FECHA_REPORTE + ':00';
            body.FECHA_REPORTE = fecha_reporte;
        }
        if (body.FECHA_AGRESION) {
            const fecha_agresion = body.FECHA_AGRESION + ':00';
            body.FECHA_AGRESION = fecha_agresion;
        }
        yield informeMedico.update(body);
        res.json({
            informeMedico
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.putInformeMedico = putInformeMedico;
//# sourceMappingURL=INFORME_MEDICOS.js.map