"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const INFORME_MEDICOS_1 = require("../controllers/INFORME_MEDICOS");
const router = (0, express_1.Router)();
router.get('/GetINFORME_MEDICOS', INFORME_MEDICOS_1.getInformeMedicos);
router.get('/GetINFORME_MEDICOId/:CLAVE_LUGAR&:ANIO&:CONTROL', INFORME_MEDICOS_1.getInformeMedico);
router.post('/PostINFORME_MEDICO', INFORME_MEDICOS_1.postInformeMedico);
router.put('/PutINFORME_MEDICO/:CLAVE_LUGAR&:ANIO&:CONTROL', INFORME_MEDICOS_1.putInformeMedico);
exports.default = router;
//# sourceMappingURL=INFORME_MEDICO.js.map