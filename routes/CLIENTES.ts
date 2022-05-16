import { Router } from 'express';
import { getClientId, postClientPolygon, deletePolygon } from '../controllers/CLIENTES';

const router = Router();

router.get('/GetCLIENTId/:client', getClientId);
router.post('/PostCLIENT_POLYGON', postClientPolygon);
router.put('/DeleteCLIENT_POLYGON', deletePolygon);

export default router;