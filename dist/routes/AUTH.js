"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AUTHS_1 = require("../controllers/AUTHS");
const router = (0, express_1.Router)();
router.post('/LOGIN', AUTHS_1.login);
exports.default = router;
//# sourceMappingURL=AUTH.js.map