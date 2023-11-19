import { Router } from 'express';
import { listarUsuarios, listarLastUser, obtenerUsuario, insertarUsuario, modificarUsuario, eliminarUsuario } from '../controllers/usuarios.controllers.js';

const router = Router();

router.get('/usuarios', listarUsuarios);
router.get('/lastregisusr', listarLastUser);
router.get('/usuarios/:id', obtenerUsuario);
router.post('/usuarios', insertarUsuario);
router.patch('/usuarios/:id', modificarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

export default router;
