"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPuestos = void 0;
const CATALOGO_PUESTOS_1 = __importDefault(require("../models/CATALOGO_PUESTOS"));
const getPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const { ADSCRIPCION } = req.params;
    const puestos = yield CATALOGO_PUESTOS_1.default.findAll({
        where: {
            ADSCRIPCION
        }
    });
    if (!puestos) {
        res.status(404).json({
            msg: `No existe información con ADSCRIPCION ${ADSCRIPCION}`
        });
    }
    res.json({
        puestos
    });
});
exports.getPuestos = getPuestos;
//# sourceMappingURL=CATALOGO_PUESTOS.js.map