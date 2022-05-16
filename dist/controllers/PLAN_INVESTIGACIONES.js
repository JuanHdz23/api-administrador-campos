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
exports.putPlanInvestigacion = exports.postPlanInvestigacion = exports.getPlanInvestigacion = exports.getPlanInvestigaciones = void 0;
const PLAN_INVESTIGACION_1 = __importDefault(require("../models/PLAN_INVESTIGACION"));
const getPlanInvestigaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plan = yield PLAN_INVESTIGACION_1.default.findAll();
    res.json({
        plan
    });
});
exports.getPlanInvestigaciones = getPlanInvestigaciones;
const getPlanInvestigacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const planInvestigacion = yield PLAN_INVESTIGACION_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!planInvestigacion) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        planInvestigacion
    });
});
exports.getPlanInvestigacion = getPlanInvestigacion;
const postPlanInvestigacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    console.log(body.CLAVE_LUGAR, body.ANIO, body.CONTROL);
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existePlanInvestigacion = yield PLAN_INVESTIGACION_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existePlanInvestigacion) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            const planInvestigacion = new PLAN_INVESTIGACION_1.default(body);
            yield planInvestigacion.save();
            res.json({
                planInvestigacion
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
exports.postPlanInvestigacion = postPlanInvestigacion;
const putPlanInvestigacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const planInvestigacion = yield PLAN_INVESTIGACION_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!planInvestigacion) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        yield planInvestigacion.update(body);
        res.json({
            planInvestigacion
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.putPlanInvestigacion = putPlanInvestigacion;
//# sourceMappingURL=PLAN_INVESTIGACIONES.js.map