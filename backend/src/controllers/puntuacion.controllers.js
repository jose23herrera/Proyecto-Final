import { pool } from '../conexion.js';

export const insertarRating = async (req, res) => {
    const { codigo } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO puntuacion(codigo, usuarios, puntuacion) VALUES (?,0,0)',[codigo]);
        res.send({
            id: rows.insertId,
            codigo,
        });
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo hasalido mal :'("});
    }
}

export const eliminarRating = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM puntuacion WHERE codigo = ?', [req.params.id]);
        if (result.affectedRows <= 0)
            return res.status(404).json({ mensaje: 'Puntuación no encontrada' });
        res.send('Puntuación con ID: ' + req.params.id + ', ha sido elimanda.');
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const listarLastRating = async(req, res) => {
    try {
        const [result] = await pool.query('SELECT SUBSTRING(codigo, 21, 2) AS last FROM puntuacion ORDER BY codigo DESC LIMIT 1');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'("});
    }
}

export const listarRatings = async(req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM puntuacion');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'("})
    }
}

export const obtenerRating = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM puntuacion WHERE codigo = ?', [req.params.id]);
        if (rows.length <= 0)
            return res.status(400).json({ mensaje: 'Puntuacion no encontrada' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'("});
    }
}

export const modificarRating = async (req, res) => {
    const { id } = req.params;
    const { usuarios, puntuacion } = req.body;
    try {
        const [result] = await pool.query('UPDATE puntuacion SET usuarios = IFNULL(?,usuarios), puntuacion = IFNULL(?,puntuacion) WHERE codigo = ?', [usuarios, puntuacion, id]);
        if (result.affectedRows === 0)
            return res.status(404).json({ mensaje: 'Puntuación: ' + id + ' no encontrada.' });
        const [rows] = await pool.query('SELECT * FROM puntuacion WHERE codigo = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}
