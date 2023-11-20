import { Router } from 'express';
import { listarTipoUser } from "../controllers/tipousuario.controllers.js";

const router = Router();

router.get('/tipousuario', listarTipoUser);

export default router;
