import { pool } from "../conexion.js";

export const listarCategorias = async(req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categoria');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const listarCategoriasLibro = async (req, res) => {
    try {
        const { categoria } = req.body;
        if (!Array.isArray(categoria))
            return res.status(400).json({ mensaje: 'La cadena debe ser un array de codigos.' });

        const placeholders = categoria.map(() => '?').join(',');

        const query = 'SELECT * FROM categoria WHERE codigo IN (' + placeholders + ')';

        const [result] = await pool.query(query, categoria);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ mensaje: "Algo ha salido mal :(", error: error.message });
    }
}