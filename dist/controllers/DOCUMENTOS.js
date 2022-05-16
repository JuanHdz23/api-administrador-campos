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
exports.getDocumentosId = void 0;
const DOCUMENTOS_1 = __importDefault(require("../models/DOCUMENTOS"));
const getDocumentosId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL, TIPO } = req.params;
    const documentos = yield DOCUMENTOS_1.default.findAll({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL,
            TIPO
        }
    });
    if (!documentos) {
        res.status(404).json({
            msg: `No existen documentos con el CONTROL ${CONTROL} y tipo ${TIPO}`
        });
    }
    res.json({
        documentos
    });
});
exports.getDocumentosId = getDocumentosId;
//# sourceMappingURL=DOCUMENTOS.js.map