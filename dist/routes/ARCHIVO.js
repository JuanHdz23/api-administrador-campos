"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ARCHIVO_1 = require("../controllers/ARCHIVO");
const router = express_1.Router();
// router.get('/GetACTIVIDADES', getActividades);
router.get('/GetARCHIVOId/:CLAVE_LUGAR&:ANIO&:CONTROL', ARCHIVO_1.getArchivoId);
// router.post('/PostACTIVIDAD', postExpediente);
exports.default = router;
//# sourceMappingURL=ARCHIVO.js.map