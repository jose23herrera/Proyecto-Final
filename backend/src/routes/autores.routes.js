import { Router } from 'express';
import { insertarAutor, listarAutores, listarLastAutor, modificarAutor, eliminarAutor, obtenerAutor } from '../controllers/autores.controllers.js';

const router = Router();

router.get('/autores', listarAutores);
router.get('/lastregisatr', listarLastAutor);
router.get('/autores/:id',obtenerAutor);
router.post('/autores', insertarAutor);
router.patch('/autores/:id', modificarAutor);
router.delete('/autores/:id', eliminarAutor);

export default router;