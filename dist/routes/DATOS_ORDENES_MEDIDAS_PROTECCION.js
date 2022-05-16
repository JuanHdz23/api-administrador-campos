"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_ORDENES_MEDIDAS_PROTECCIONES_1 = require("../controllers/DATOS_ORDENES_MEDIDAS_PROTECCIONES");
const router = (0, express_1.Router)();
router.get('/GetDATOS_ORDENES_MEDIDAS_PROTECCIONES', DATOS_ORDENES_MEDIDAS_PROTECCIONES_1.getDatosOrdenesMedidasProtecciones);
router.get('/GetDATOS_ORDENES_MEDIDAS_PROTECCIONId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_ORDENES_MEDIDAS_PROTECCIONES_1.getDatosOrdenesMedidasProteccion);
router.post('/PostDATOS_ORDENES_MEDIDAS_PROTECCION', DATOS_ORDENES_MEDIDAS_PROTECCIONES_1.postDatosOrdenesMedidasProteccion);
router.put('/PutDATOS_ORDENES_MEDIDAS_PROTECCION/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_ORDENES_MEDIDAS_PROTECCIONES_1.putDatosOrdenesMedidasProteccion);
exports.default = router;
//# sourceMappingURL=DATOS_ORDENES_MEDIDAS_PROTECCION.js.map