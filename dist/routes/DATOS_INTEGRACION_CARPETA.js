"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_INTEGRACION_CARPETAS_1 = require("../controllers/DATOS_INTEGRACION_CARPETAS");
const router = (0, express_1.Router)();
router.get('/GetDATOS_INTEGRACION_CARPETAS', DATOS_INTEGRACION_CARPETAS_1.getDatosIntegracionCarpetas);
router.get('/GetDATOS_INTEGRACION_CARPETAId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_INTEGRACION_CARPETAS_1.getDatosIntegracionCarpeta);
router.post('/PostDATOS_INTEGRACION_CARPETA', DATOS_INTEGRACION_CARPETAS_1.postDatosIntegracionCarpeta);
router.put('/PutDATOS_INTEGRACION_CARPETA/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_INTEGRACION_CARPETAS_1.putDatosIntegracionCarpeta);
exports.default = router;
//# sourceMappingURL=DATOS_INTEGRACION_CARPETA.js.map