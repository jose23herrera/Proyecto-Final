import { Router } from 'express';
import { insertarRating, eliminarRating, listarLastRating, obtenerRating, listarRatings, modificarRating } from '../controllers/puntuacion.controllers.js';

const router = Router();

router.post('/puntuacion', insertarRating);
router.delete('/puntuacion/:id', eliminarRating);
router.get('/lastregisrtn', listarLastRating);
router.get('/puntuacion', listarRatings);
router.get('/puntuacion/:id', obtenerRating);
router.patch('/puntuacion/:id', modificarRating);

export default router;