"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CLIENTES_1 = require("../controllers/CLIENTES");
const router = (0, express_1.Router)();
router.get('/GetCLIENTId/:client', CLIENTES_1.getClientId);
router.post('/PostCLIENT_POLYGON', CLIENTES_1.postClientPolygon);
router.put('/DeleteCLIENT_POLYGON', CLIENTES_1.deletePolygon);
exports.default = router;
//# sourceMappingURL=CLIENTES.js.map