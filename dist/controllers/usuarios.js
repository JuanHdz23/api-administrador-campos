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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const USUARIO_1 = __importDefault(require("../models/USUARIO"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield USUARIO_1.default.findAll();
    res.json({
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CONTROL } = req.params;
    const usuario = yield USUARIO_1.default.findByPk(CONTROL);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe un usuario con el CONTROL ${CONTROL}`
        });
    }
    res.json({
        usuario
    });
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeUsuario = yield USUARIO_1.default.findOne({
            where: {
                USUARIO: body.USUARIO
            }
        });
        if (existeUsuario) {
            return res.status(400).json({
                msg: `El usuario ${body.USUARIO} ya se encuentra registrado.`
            });
        }
        const lastId = yield USUARIO_1.default.findOne({
            raw: true,
            order: [
                ['CONTROL', 'DESC']
            ]
        }).then((data) => {
            if (!data) {
                const control = 1;
                body.CONTROL = control;
                return true;
            }
            const control = parseInt(data['CONTROL']) + 1;
            body.CONTROL = control;
        });
        const salt = yield bcrypt_1.default.genSaltSync(10);
        const buffSalt = new Buffer(salt);
        body.SALT = buffSalt;
        const password = yield bcrypt_1.default.hashSync(body.PASSWORD, salt);
        const buffPassword = new Buffer(password);
        body.PASSWORD = buffPassword;
        const usuario = new USUARIO_1.default(body);
        yield usuario.save();
        res.json({
            usuario
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CONTROL } = req.params;
    const { body } = req;
    try {
        const usuario = yield USUARIO_1.default.findByPk(CONTROL);
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con el CONTROL ${CONTROL}`
            });
        }
        const salt = yield bcrypt_1.default.genSaltSync(10);
        const buffSalt = new Buffer(salt);
        body.SALT = buffSalt;
        const password = yield bcrypt_1.default.hashSync(body.PASSWORD, salt);
        const buffPassword = new Buffer(password);
        body.PASSWORD = buffPassword;
        yield usuario.update(body);
        res.json({
            usuario
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CONTROL } = req.params;
    const usuario = yield USUARIO_1.default.findByPk(CONTROL);
    if (!usuario) {
        return res.status(400).json({
            msg: `No existe un usuario con el CONTROL ${CONTROL}`
        });
    }
    yield usuario.update({ ACTIVO: false });
    res.json({
        usuario
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=USUARIOS.js.map