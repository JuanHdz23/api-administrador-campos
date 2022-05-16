"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TAMIZAJE_USUARIAS_1 = require("../controllers/TAMIZAJE_USUARIAS");
const router = (0, express_1.Router)();
router.get('/GetTAMIZAJE_USUARIAS', TAMIZAJE_USUARIAS_1.getTamizajes);
router.get('/GetTAMIZAJE_USUARIAId/:CLAVE_LUGAR&:ANIO&:CONTROL', TAMIZAJE_USUARIAS_1.getTamizaje);
router.post('/PostTAMIZAJE_USUARIA', TAMIZAJE_USUARIAS_1.postTamizaje);
router.put('/PutTAMIZAJE_USUARIA/:CLAVE_LUGAR&:ANIO&:CONTROL', TAMIZAJE_USUARIAS_1.putTamizaje);
exports.default = router;
//# sourceMappingURL=TAMIZAJE_USUARIA.js.map