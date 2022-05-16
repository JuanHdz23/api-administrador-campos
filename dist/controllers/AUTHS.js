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
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const USUARIO_1 = __importDefault(require("../models/USUARIO"));
const generar_jwt_1 = require("../helpers/generar-jwt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { USER, PASSWORD } = req.body;
    try {
        const usuario = yield USUARIO_1.default.findOne({
            where: {
                USUARIO: USER
            }
        });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        if (!usuario.get('ACTIVO')) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: inactivo'
            });
        }
        const password = usuario.get('PASSWORD');
        const buffPassword = new Buffer(password, 'base64');
        const pass = buffPassword.toString('ascii');
        const validarPassword = bcrypt_1.default.compareSync(PASSWORD, pass);
        if (!validarPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }
        // Generar JWT
        const control = usuario.get('CONTROL');
        const nombre = usuario.get('NOMBRE');
        const paterno = usuario.get('PATERNO');
        const clave_lugar = usuario.get('CLAVE_LUGAR');
        const rol = usuario.get('ROL');
        const clave_empleado = usuario.get('CLAVE_EMPLEADO');
        const token = yield (0, generar_jwt_1.generarJWT)(control, nombre, paterno, clave_lugar, rol, clave_empleado);
        res.json({
            token
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
});
exports.login = login;
//# sourceMappingURL=AUTHS.js.map