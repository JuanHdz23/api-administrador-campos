"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DATOS_ACOMPANAMIENTO_PSICOLOGICOS_1 = require("../controllers/DATOS_ACOMPANAMIENTO_PSICOLOGICOS");
const router = (0, express_1.Router)();
router.get('/GetDATOS_ACOMPANAMIENTO_PSICOLOGICOS', DATOS_ACOMPANAMIENTO_PSICOLOGICOS_1.getDatosAcompanamientoPsicologicos);
router.get('/GetDATOS_ACOMPANAMIENTO_PSICOLOGICOId/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_ACOMPANAMIENTO_PSICOLOGICOS_1.getDatosAcompanamientoPsicologico);
router.post('/PostDATOS_ACOMPANAMIENTO_PSICOLOGICO', DATOS_ACOMPANAMIENTO_PSICOLOGICOS_1.postDatosAcompanamientoPsicologico);
router.put('/PutDATOS_ACOMPANAMIENTO_PSICOLOGICO/:CLAVE_LUGAR&:ANIO&:CONTROL', DATOS_ACOMPANAMIENTO_PSICOLOGICOS_1.putDatosAcompanamientoPsicologico);
exports.default = router;
//# sourceMappingURL=DATOS_ACOMPANAMIENTO_PSICOLOGICO.js.map