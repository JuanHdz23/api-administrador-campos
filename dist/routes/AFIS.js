"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AFIS_1 = require("../controllers/AFIS");
const router = express_1.Router();
router.get('/GetAFISId/:CLAVE_LUGAR&:ANIO&:CONTROL', AFIS_1.getAfisId);
router.post('/PostAFIS', AFIS_1.postAfis);
router.put('/PutAFIS/:CLAVE_LUGAR&:ANIO&:CONTROL&:USUARIO', AFIS_1.putAfis);
exports.default = router;
//# sourceMappingURL=AFIS.js.map