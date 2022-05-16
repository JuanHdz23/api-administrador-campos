import { Router } from 'express';
import { test } from '../controllers/tests';

const router = Router();

router.get('/test', test);

export default router;