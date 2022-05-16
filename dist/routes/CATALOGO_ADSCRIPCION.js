"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CATALOGO_ADSCRIPCION_1 = require("../controllers/CATALOGO_ADSCRIPCION");
const router = express_1.Router();
router.get('/GetCATALOGO_ADSCRIPCION', CATALOGO_ADSCRIPCION_1.getAdscripciones);
exports.default = router;
//# sourceMappingURL=CATALOGO_ADSCRIPCION.js.map