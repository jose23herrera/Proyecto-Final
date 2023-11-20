import { Router } from 'express';
import { listarFormatos, listarFormatosLibros } from '../controllers/formato.controllers.js';

const router = Router();

router.get('/formatos', listarFormatos);
router.get('/formatoslibro', listarFormatosLibros);

export default router;
