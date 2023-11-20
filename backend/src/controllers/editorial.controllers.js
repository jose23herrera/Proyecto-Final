import { pool } from "../conexion.js";

export const listarEditoriales = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM editorial');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'("});
    }
}

export const listarLastEditorial = async (req, res) => {
    const { cadena } = req.body; 
    try {
        const [result] = await pool.query('SELECT SUBSTRING(codigo, 4, 7) AS last FROM editorial WHERE codigo LIKE ? ORDER BY codigo DESC LIMIT 1', [cadena]);
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({mensaje: "Algo ha salido mal :'("});
    }
}

export const obtenerEditorial = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM editorial WHERE codigo = ?', [req.params.id]);
        if (rows.length <= 0)
            return res.status(404).json({ mensaje: 'Editorial no encontrada' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const insertarEditorial = async (req, res) => {
    const { codigo, nombre, descripcion, contacto, correo, pais, telefono } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO editorial(codigo, nombre, descripcion, contacto, correo, pais, telefono) VALUES (?,?,?,?,?,?,?)',[codigo,nombre,descripcion,contacto,correo,pais,telefono]);
        res.send({
            id: rows.insertId, codigo, nombre, descripcion, contacto, correo, pais, telefono
        });
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const modificarEditorial = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, contacto, correo, pais, telefono } = req.body;
    try {
        const [result] = await pool.query('UPDATE editorial SET nombre = IFNULL(?,nombre), descripcion = IFNULL(?,descripcion), contacto = IFNULL(?,contacto), correo = IFNULL(?,correo), pais = IFNULL(?,pais), telefono = IFNULL(?,telefono) WHERE codigo = ?',[nombre,descripcion,contacto,correo,pais,telefono,id]);
        if (result.affectedRows === 0)
            return res.status(404).json({ mensaje: 'Editorial no encontrada'});
        const [rows] = await pool.query('SELECT * FROM editorial WHERE codigo = ?',[id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const eliminarEditorial = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM editorial WHERE codigo = ?', [req.params.id]);
        if (result.affectedRows <= 0)
            return res.status(404).json({ mensaje: 'Editorial no encontrada' });
        res.send('Editorial con ID: ' + req.params.id + ', ha sido eliminada.');
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}
