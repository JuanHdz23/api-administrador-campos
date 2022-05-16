"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VALIDACIONES_1 = require("../controllers/VALIDACIONES");
const router = express_1.Router();
router.post('/CONTAR', VALIDACIONES_1.contarValores);
exports.default = router;
//# sourceMappingURL=VALIDACION.js.map