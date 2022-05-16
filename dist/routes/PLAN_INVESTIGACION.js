"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PLAN_INVESTIGACIONES_1 = require("../controllers/PLAN_INVESTIGACIONES");
const router = (0, express_1.Router)();
router.get('/GetPLAN_INVESTIGACIONES', PLAN_INVESTIGACIONES_1.getPlanInvestigaciones);
router.get('/GetPLAN_INVESTIGACIONId/:CLAVE_LUGAR&:ANIO&:CONTROL', PLAN_INVESTIGACIONES_1.getPlanInvestigacion);
router.post('/PostPLAN_INVESTIGACION', PLAN_INVESTIGACIONES_1.postPlanInvestigacion);
router.put('/PutPLAN_INVESTIGACION/:CLAVE_LUGAR&:ANIO&:CONTROL', PLAN_INVESTIGACIONES_1.putPlanInvestigacion);
exports.default = router;
//# sourceMappingURL=PLAN_INVESTIGACION.js.map