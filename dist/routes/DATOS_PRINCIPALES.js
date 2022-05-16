"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_PRINCIPALES_1 = require("../controllers/DATOS_PRINCIPALES");
const router = (0, express_1.Router)();
router.get('/GetDATOS_CITAS', DATOS_PRINCIPALES_1.getCitas);
router.get('/GetDATOS_CITAId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_PRINCIPALES_1.getCita);
router.get('/GetDATOS_EXPEDIENTEId/:CLAVE_LUGAR', DATOS_PRINCIPALES_1.getExpedienteClaveLugar);
router.post('/PostDATOS_EXPEDIENTE', DATOS_PRINCIPALES_1.postCita);
router.put('/PutDATOS_EXPEDIENTE/:CLAVE_LUGAR&:ANIO&:CONTROL&:USUARIO', DATOS_PRINCIPALES_1.putCita);
exports.default = router;
//# sourceMappingURL=DATOS_PRINCIPALES.js.map