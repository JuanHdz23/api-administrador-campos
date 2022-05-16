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
exports.putPlanAccionEmergente = exports.postPlanAccionEmergente = exports.getPlanAccionEmergente = exports.getPlanAccionEmergentes = void 0;
const PLAN_ACCION_EMERGENTE_1 = __importDefault(require("../models/PLAN_ACCION_EMERGENTE"));
const getPlanAccionEmergentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planAccionEmergentes = yield PLAN_ACCION_EMERGENTE_1.default.findAll();
    res.json({
        planAccionEmergentes
    });
});
exports.getPlanAccionEmergentes = getPlanAccionEmergentes;
const getPlanAccionEmergente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const planAccionEmergente = yield PLAN_ACCION_EMERGENTE_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!planAccionEmergente) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        planAccionEmergente
    });
});
exports.getPlanAccionEmergente = getPlanAccionEmergente;
const postPlanAccionEmergente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existePlanAccionEmergente = yield PLAN_ACCION_EMERGENTE_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existePlanAccionEmergente) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            const planAccionEmergente = new PLAN_ACCION_EMERGENTE_1.default(body);
            yield planAccionEmergente.save();
            res.json({
                planAccionEmergente
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
exports.postPlanAccionEmergente = postPlanAccionEmergente;
const putPlanAccionEmergente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const planAccionEmergente = yield PLAN_ACCION_EMERGENTE_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!planAccionEmergente) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        yield planAccionEmergente.update(body);
        res.json({
            planAccionEmergente
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.putPlanAccionEmergente = putPlanAccionEmergente;
//# sourceMappingURL=PLAN_ACCION_EMERGENTES.js.map