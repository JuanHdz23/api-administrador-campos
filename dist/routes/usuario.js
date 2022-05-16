"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const USUARIOS_1 = require("../controllers/USUARIOS");
const router = (0, express_1.Router)();
router.get('/GetUSUARIOS', USUARIOS_1.getUsuarios);
router.get('/GetUSUARIOId/:CONTROL', USUARIOS_1.getUsuario);
router.post('/PostUSUARIO', USUARIOS_1.postUsuario);
router.put('/PutUSUARIO/:CONTROL', USUARIOS_1.putUsuario);
router.delete('/:CONTROL', USUARIOS_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=USUARIO.js.map