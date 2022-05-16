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
exports.putDatosAgresor = exports.postDatosAgresor = exports.getDatosAgresor = exports.getDatosAgresores = void 0;
const DATOS_AGRESOR_1 = __importDefault(require("../models/DATOS_AGRESOR"));
const getDatosAgresores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datosAgresores = yield DATOS_AGRESOR_1.default.findAll();
    res.json({
        datosAgresores
    });
});
exports.getDatosAgresores = getDatosAgresores;
const getDatosAgresor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const datosAgresor = yield DATOS_AGRESOR_1.default.findOne({
        where: {
            CLAVE_LUGAR,
            ANIO,
            CONTROL
        }
    });
    if (!datosAgresor) {
        res.status(404).json({
            msg: `No existe información con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        datosAgresor
    });
});
exports.getDatosAgresor = getDatosAgresor;
const postDatosAgresor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        if (body.CLAVE_LUGAR && body.ANIO && body.CONTROL) {
            const existeDatosAgresor = yield DATOS_AGRESOR_1.default.findOne({
                where: {
                    CLAVE_LUGAR: body.CLAVE_LUGAR,
                    ANIO: body.ANIO,
                    CONTROL: body.CONTROL
                }
            });
            if (existeDatosAgresor) {
                return res.status(400).json({
                    msg: `Ya existe información con el CONTROL ${body.CONTROL}, utilice UPDATE`
                });
            }
            const datosAgresor = new DATOS_AGRESOR_1.default(body);
            yield datosAgresor.save();
            res.json({
                datosAgresor
            });
        }
        else {
            return res.status(400).json({
                msg: `No esta llegando CLAVE, ANIO o CONTROL completo`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.postDatosAgresor = postDatosAgresor;
const putDatosAgresor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CLAVE_LUGAR, ANIO, CONTROL } = req.params;
    const { body } = req;
    try {
        const datosAgresor = yield DATOS_AGRESOR_1.default.findOne({
            where: {
                CLAVE_LUGAR,
                ANIO,
                CONTROL
            }
        });
        if (!datosAgresor) {
            return res.status(400).json({
                msg: `No existe información con el CONTROL ${CONTROL}`
            });
        }
        yield datosAgresor.update(body);
        res.json({
            datosAgresor
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putDatosAgresor = putDatosAgresor;
//# sourceMappingURL=DATOS_AGRESORES.js.map