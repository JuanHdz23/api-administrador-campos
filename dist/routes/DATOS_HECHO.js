"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_HECHOS_1 = require("../controllers/DATOS_HECHOS");
const router = (0, express_1.Router)();
router.get('/GetDATOS_HECHOS', DATOS_HECHOS_1.getDatosHechos);
router.get('/GetDATOS_HECHOId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_HECHOS_1.getDatosHecho);
router.post('/PostDATOS_HECHO', DATOS_HECHOS_1.postDatosHecho);
router.put('/PutDATOS_HECHO/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_HECHOS_1.putDatosHecho);
exports.default = router;
//# sourceMappingURL=DATOS_HECHO.js.map