"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_AGRESORES_1 = require("../controllers/DATOS_AGRESORES");
const router = (0, express_1.Router)();
router.get('/GetDATOS_AGRESORES', DATOS_AGRESORES_1.getDatosAgresores);
router.get('/GetDATOS_AGRESORId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_AGRESORES_1.getDatosAgresor);
router.post('/PostDATOS_AGRESOR', DATOS_AGRESORES_1.postDatosAgresor);
router.put('/PutDATOS_AGRESOR/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_AGRESORES_1.putDatosAgresor);
exports.default = router;
//# sourceMappingURL=DATOS_AGRESOR.js.map