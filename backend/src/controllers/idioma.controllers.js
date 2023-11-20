import { pool } from "../conexion.js";

export const listarIdiomas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM idioma');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const listarIdiomasLibros = async (req, res) => {
    try {
        const { idioma } = req.body;
        if (!Array.isArray(idioma))
            return res.status(400).json({ mensaje: 'La cadena debe ser un array de codigos.' });

        const placeholders = idioma.map(() => '?').join(',');

        const query = 'SELECT * FROM idioma WHERE codigo IN (' + placeholders + ')';

        const [result] = await pool.query(query, idioma);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ mensaje: "Algo ha salido mal :(", error: error.message });
    }
}