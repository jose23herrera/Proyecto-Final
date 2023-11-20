import { Router } from 'express';
import { listarLibros, listarLibrosUser, insertarLibro, listarLastLibro, modificarLibro, obtenerLibro, eliminarLibro } from '../controllers/libros.controllers.js';

const router = Router();

router.get('/libros', listarLibros);
router.get('/libros/:id', obtenerLibro);
router.get('/lastregislbr', listarLastLibro);
router.get('/librosuser', listarLibrosUser);
router.patch('/libros/:id', modificarLibro);
router.post('/libros', insertarLibro);
router.delete('/libros/:id', eliminarLibro);

export default router;