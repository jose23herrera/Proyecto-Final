import { Router } from 'express';
import { listarCategorias, listarCategoriasLibro } from '../controllers/categoria.controllers.js';

const router = Router();

router.get('/categorias', listarCategorias);
router.get('/categoriaslibro', listarCategoriasLibro);

export default router;
