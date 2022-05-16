"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CATALOGO_PUESTOS_1 = require("../controllers/CATALOGO_PUESTOS");
const router = express_1.Router();
router.get('/GetCATALOGO_PUESTOS/:ADSCRIPCION', CATALOGO_PUESTOS_1.getPuestos);
exports.default = router;
//# sourceMappingURL=CATALOGO_PUESTOS.js.map