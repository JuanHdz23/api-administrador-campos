"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BIOMETRICOS_1 = require("../controllers/BIOMETRICOS");
const router = express_1.Router();
router.get('/GetBIOMETRICOSId/:CLAVE_LUGAR&:ANIO&:CONTROL', BIOMETRICOS_1.getBiometricosId);
router.post('/PostBIOMETRICOS', BIOMETRICOS_1.postBiometricos);
router.put('/PutBIOMETRICOS/:CLAVE_LUGAR&:ANIO&:CONTROL&:USUARIO', BIOMETRICOS_1.putBiometricos);
exports.default = router;
//# sourceMappingURL=BIOMETRICOS.js.map