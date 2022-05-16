"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RNPSP_1 = require("../controllers/RNPSP");
const router = express_1.Router();
router.get('/GetRNPSPId/:CLAVE_LUGAR&:ANIO&:CONTROL', RNPSP_1.getRnpspId);
router.post('/PostRNPSP', RNPSP_1.postRnpsp);
router.put('/PutAFIS/:CLAVE_LUGAR&:ANIO&:CONTROL&:USUARIO', RNPSP_1.putRnpsp);
exports.default = router;
//# sourceMappingURL=RNPSP.js.map