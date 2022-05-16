"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esAdminRole = void 0;
const esAdminRole = (req, res, next) => {
    const { USUARIO, ROL, NOMBRE } = req.params;
    if (!USUARIO) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }
    if (ROL != 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${NOMBRE} no es administrador - No puede ejecutar esta acción`
        });
    }
    next();
};
exports.esAdminRole = esAdminRole;
// export const tieneRole = ( ...roles ) => {
//     return ( req: Request, res: Response, next: NextFunction ) => {
//         if ( !req.usuario ) {
//             return res.status(500).json({
//                 msg: 'Se quiere verificar el role sin validar el token primero'
//             });
//         }
//         if ( !roles.includes( req.usuario.rol ) ) {
//             return res.status(401).json({
//                 msg: `El servicio requiere uno de estos roles: ${ roles }`
//             });
//         }
//         next();
//     };
// };
//# sourceMappingURL=validar-roles.js.map