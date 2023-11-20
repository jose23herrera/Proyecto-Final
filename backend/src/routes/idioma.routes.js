import { Router } from 'express';
import { listarIdiomas, listarIdiomasLibros } from "../controllers/idioma.controllers.js";

const router = Router();

router.get('/idiomas', listarIdiomas);
router.get('/idiomaslibros', listarIdiomasLibros);

export default router;