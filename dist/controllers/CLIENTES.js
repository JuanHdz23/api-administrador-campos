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
exports.deletePolygon = exports.postClientPolygon = exports.getClientId = void 0;
const CLIENTES_1 = __importDefault(require("../models/CLIENTES"));
const getClientId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { client } = req.params;
    const cliente = yield CLIENTES_1.default.findAll({
        where: {
            client,
            active: '1'
        }
    });
    if (!cliente) {
        res.status(404).json({
            msg: `No existen clientes con el CLIENTE ${client}`
        });
    }
    res.json({
        cliente
    });
});
exports.getClientId = getClientId;
const postClientPolygon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield CLIENTES_1.default.findOne({
            raw: true,
            where: {
                client: body.client
            },
            order: [
                ['id', 'desc']
            ]
        }).then((data) => {
            if (!data) {
                const id = 1;
                body.id = id;
                return true;
            }
            const id = parseInt(data['id']) + 1;
            body.id = id;
        });
        const clientes = {
            id: body.id,
            client: body.client,
            name: body.name,
            location: body.location,
            polygon: body.polygon,
            active: '1'
        };
        const cliente = new CLIENTES_1.default(clientes);
        yield cliente.save();
        res.status(201).json();
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador del sistema',
            error
        });
    }
});
exports.postClientPolygon = postClientPolygon;
const deletePolygon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const polygon = yield CLIENTES_1.default.findOne({
            where: {
                id: body.id
            }
        });
        if (!polygon) {
            return res.status(400).json({
                msg: `No existe información con el ID ${body.id}`
            });
        }
        body.active = '0';
        yield polygon.update(body);
        res.status(200).json({
            polygon
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.deletePolygon = deletePolygon;
//# sourceMappingURL=CLIENTES.js.map