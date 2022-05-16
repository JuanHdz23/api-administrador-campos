"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ESTATUS_CARPETAS_1 = require("../controllers/ESTATUS_CARPETAS");
const router = (0, express_1.Router)();
router.get('/GetESTATUS_CARPETAS', ESTATUS_CARPETAS_1.getEstatusCarpetas);
router.get('/GetESTATUS_CARPETAId/:CLAVE_LUGAR&:ANIO&:CONTROL', ESTATUS_CARPETAS_1.getEstatusCarpeta);
router.post('/PostESTATUS_CARPETA', ESTATUS_CARPETAS_1.postEstatusCarpeta);
router.put('/PutESTATUS_CARPETA/:CLAVE_LUGAR&:ANIO&:CONTROL', ESTATUS_CARPETAS_1.putEstatusCarpeta);
exports.default = router;
//# sourceMappingURL=ESTATUS_CARPETA.js.map