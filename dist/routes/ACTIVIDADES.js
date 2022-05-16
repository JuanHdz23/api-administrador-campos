"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ACTIVIDADES_1 = require("../controllers/ACTIVIDADES");
const router = (0, express_1.Router)();
// router.get('/GetACTIVIDADES', getActividades);
router.get('/GetACTIVIDADESId/:CLAVE_LUGAR&:ANIO&:CONTROL', ACTIVIDADES_1.getActividadesId);
// router.post('/PostACTIVIDAD', postExpediente);
exports.default = router;
//# sourceMappingURL=ACTIVIDADES.js.map