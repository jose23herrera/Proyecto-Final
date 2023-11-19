import express from 'express';
import libroRoutes from './routes/libros.routes.js';
import usuarioRoutes from './routes/usuarios.routes.js';
import puntuacionRoutes from './routes/puntuacion.routes.js';
import autorRoutes from './routes/autores.routes.js';
import editorialRoutes from './routes/editorial.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';
import formatoRoutes from "./routes/formato.routes.js";
import idiomaRoutes from "./routes/idioma.routes.js";
import tipousuarioRoutes from "./routes/tipousuario.routes.js";

import { PORT } from './config.js';

const app = express();

app.use(express.json())

app.use(libroRoutes);
app.use(usuarioRoutes);
app.use(puntuacionRoutes);
app.use(autorRoutes);
app.use(editorialRoutes);
app.use(categoriaRoutes);
app.use(formatoRoutes);
app.use(idiomaRoutes);
app.use(tipousuarioRoutes);

app.use((req, res, next) => {
    res.status(404).json({mensaje: 'Dirección no encontrada'});
});

app.listen(PORT);
console.log('Server escucha por el puerto', PORT);
