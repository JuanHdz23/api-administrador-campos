"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DOCUMENTOS_1 = require("../controllers/DOCUMENTOS");
const router = express_1.Router();
// router.get('/GetACTIVIDADES', getActividades);
router.get('/GetDOCUMENTOSId/:CLAVE_LUGAR&:ANIO&:CONTROL&:TIPO', DOCUMENTOS_1.getDocumentosId);
// router.post('/PostACTIVIDAD', postExpediente);
exports.default = router;
//# sourceMappingURL=DOCUMENTOS.js.map