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
exports.getExpediente = exports.getExpedientes = void 0;
const DATOS_EXPEDIENTE_1 = __importDefault(require("../models/DATOS_EXPEDIENTE"));
const getExpedientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expedientes = yield DATOS_EXPEDIENTE_1.default.findAll();
    res.json({
        expedientes
    });
});
exports.getExpedientes = getExpedientes;
const getExpediente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    console.log(req.params);
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const expediente = yield DATOS_EXPEDIENTE_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!expediente) {
        res.status(404).json({
            msg: `No existe un usuario con el id ${CONTROL}`
        });
    }
    res.json({
        expediente
    });
});
exports.getExpediente = getExpediente;
//# sourceMappingURL=DATOS_EXPEDIENTE.js.map