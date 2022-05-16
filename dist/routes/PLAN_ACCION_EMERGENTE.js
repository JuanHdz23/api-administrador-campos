"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PLAN_ACCION_EMERGENTES_1 = require("../controllers/PLAN_ACCION_EMERGENTES");
const router = (0, express_1.Router)();
router.get('/GetPLAN_ACCION_EMERGENTES', PLAN_ACCION_EMERGENTES_1.getPlanAccionEmergentes);
router.get('/GetPLAN_ACCION_EMERGENTEId/:CLAVE_LUGAR&:ANIO&:CONTROL', PLAN_ACCION_EMERGENTES_1.getPlanAccionEmergente);
router.post('/PostPLAN_ACCION_EMERGENTE', PLAN_ACCION_EMERGENTES_1.postPlanAccionEmergente);
router.put('/PutPLAN_ACCION_EMERGENTE/:CLAVE_LUGAR&:ANIO&:CONTROL', PLAN_ACCION_EMERGENTES_1.putPlanAccionEmergente);
exports.default = router;
//# sourceMappingURL=PLAN_ACCION_EMERGENTE.js.map