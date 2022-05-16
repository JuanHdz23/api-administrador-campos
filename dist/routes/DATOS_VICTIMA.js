"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_VICTIMAS_1 = require("../controllers/DATOS_VICTIMAS");
const router = (0, express_1.Router)();
router.get('/GetDATOS_VICTIMAS', DATOS_VICTIMAS_1.getDatosVictimas);
router.get('/GetDATOS_VICTIMAId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_VICTIMAS_1.getDatosVictima);
router.post('/PostDATOS_VICTIMA', DATOS_VICTIMAS_1.postDatosVictima);
router.put('/PutDATOS_VICTIMA/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_VICTIMAS_1.putDatosVictima);
exports.default = router;
//# sourceMappingURL=DATOS_VICTIMA.js.map