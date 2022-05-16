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
exports.contarValores = void 0;
const TAMIZAJE_USUARIA_1 = __importDefault(require("../models/TAMIZAJE_USUARIA"));
const getValor = (cadena = '') => {
    if (cadena.length > 0) {
        return cadena.charAt(1);
    }
};
const contarValores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const tamizaje = yield TAMIZAJE_USUARIA_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (tamizaje) {
        const aplico_tamizaje = tamizaje.get('APLICO_TAMIZAJE');
        const clasifico_var = tamizaje.get('CLASIFICO_VAR');
        const variables_afirmativas = tamizaje.get('VARIABLES_AFIRMATIVAS');
        const vaplico_tamizaje = getValor(aplico_tamizaje);
        const vclasifico_var = getValor(clasifico_var);
        const vvariables_afirmativas = getValor(variables_afirmativas);
        res.json({
            vaplico_tamizaje,
            vclasifico_var,
            vvariables_afirmativas
        });
    }
    // const planInvestigacion = await PLAN_INVESTIGACION.findOne({ 
    //     where: {
    //         CLAVE_LUGAR,
    //         ANIO,
    //         CONTROL
    //     }
    // });
});
exports.contarValores = contarValores;
//# sourceMappingURL=CONTEOS.js.map