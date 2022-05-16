"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tests_1 = require("../controllers/tests");
const router = (0, express_1.Router)();
router.get('/test', tests_1.test);
exports.default = router;
//# sourceMappingURL=test.js.map