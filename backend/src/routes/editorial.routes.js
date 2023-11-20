import { Router } from 'express';
import { listarEditoriales, listarLastEditorial, obtenerEditorial, insertarEditorial, modificarEditorial,eliminarEditorial } from '../controllers/editorial.controllers.js';

const router = Router();

router.get('/editoriales', listarEditoriales);
router.get('/lastregisedt', listarLastEditorial);
router.get('/editoriales/:id', obtenerEditorial);
router.post('/editoriales', insertarEditorial);
router.delete('/editoriales/:id', eliminarEditorial);
router.patch('/editoriales/:id', modificarEditorial);

export default router;