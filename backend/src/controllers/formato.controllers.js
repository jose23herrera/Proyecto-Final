import { pool } from "../conexion.js";

export const listarFormatos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM formato');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const listarFormatosLibros = async (req, res) => {
    try {
        const { formato } = req.body;
        if (!Array.isArray(formato))
            return res.status(400).json({ mensaje: 'La cadena debe ser un array de codigos.' });

        const placeholders = formato.map(() => '?').join(',');

        const query = 'SELECT * FROM formato WHERE nombre IN (' + placeholders + ')';

        const [result] = await pool.query(query, formato);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ mensaje: "Algo ha salido mal :(", error: error.message });
    }
}