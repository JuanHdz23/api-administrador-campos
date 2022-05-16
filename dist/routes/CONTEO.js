"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CONTEOS_1 = require("../controllers/CONTEOS");
const router = (0, express_1.Router)();
router.get('/:CLAVE_LUGAR&:ANIO&:CONTROL', CONTEOS_1.contarValores);
exports.default = router;
//# sourceMappingURL=CONTEO.js.map