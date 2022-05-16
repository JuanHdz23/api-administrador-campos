"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_EXPEDIENTES_1 = require("../controllers/DATOS_EXPEDIENTES");
const router = (0, express_1.Router)();
router.get('/GetDATOS_EXPEDIENTES', DATOS_EXPEDIENTES_1.getExpedientes);
router.get('/GetDATOS_EXPEDIENTEId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_EXPEDIENTES_1.getExpediente);
router.get('/GetDATOS_EXPEDIENTEId/:CLAVE_LUGAR', DATOS_EXPEDIENTES_1.getExpedienteClaveLugar);
router.post('/PostDATOS_EXPEDIENTE', DATOS_EXPEDIENTES_1.postExpediente);
router.put('/PutDATOS_EXPEDIENTE/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_EXPEDIENTES_1.putExpediente);
exports.default = router;
//# sourceMappingURL=DATOS_EXPEDIENTE.js.map