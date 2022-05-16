"use strict";
// import { Request, Response, NextFunction } from 'express';
// import USUARIO from '../models/USUARIO';
// const jwt = require('jsonwebtoken');
// // const Usuario = require('../models/usuario');
// const { usuariosPut } = require('../controllers/usuarios');
// export const validarJWT = async ( req: Request, res: Response, next: NextFunction ) => {
//     const token = req.header('x-token');
//     if ( !token ) {
//         return res.status(401).json({
//             msg: 'No hay token en la petición'
//         });
//     }
//     try {
//         const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
//         // Leer el usuario que corresponde al uid
//         const usuario = await USUARIO.findByPk( uid );
//         if ( !usuario ) {
//             return res.status(401).json({
//                 msg: 'Token no válido - usuario no existe en BD'
//             });
//         }
//         // Verificar si uid esta activo
//         if ( !usuario.ACTIVO ) {
//             return res.status(401).json({
//                 msg: 'Token no válido - usuario con estado: false'
//             });
//         }
//         req.params.USUARIO = usuario;
//         next();
//     } catch (error) {
//         // console.log(error);
//         res.status(401).json({
//             msg: 'Token no válido'
//         });
//     }
// };
//# sourceMappingURL=validar-jwt.js.map