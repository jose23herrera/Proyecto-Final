import { pool } from '../conexion.js';

export const listarAutores = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM autor');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const listarLastAutor = async(req, res) => {
    try {
        const [result] = await pool.query('SELECT SUBSTRING(codigo, 3, 8) AS last FROM autor ORDER BY codigo DESC LIMIT 1');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({mensaje: "Algo ha salido mal :'("});
    }
}

export const obtenerAutor = async(req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM autor WHERE codigo = ?', [id]);
        if (rows.length <= 0)
            return res.status(404).json({ mensaje: "Autor no encontrado" });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const insertarAutor = async(req, res) => {
    const { codigo, nombres, apellidos, foto, correo, biografia, nacionalidad, sexo } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO autor(codigo, nombres, apellidos, foto, correo, biografia, nacionalidad, sexo) VALUES (?,?,?,?,?,?,?,?)',[codigo,nombres,apellidos,foto,correo,biografia,nacionalidad,sexo]);
        res.send({
            id: rows.insertId,
            codigo,
            nombres,
            apellidos,
            foto,
            correo,
            biografia,
            nacionalidad,
            sexo
        });
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const modificarAutor = async (req, res) => {
    const { id } = req.params;
    const {nombres,apellidos,foto,correo,biografia,nacionalidad,sexo } = req.body;
    try {
        const [result] = await pool.query('UPDATE autor SET nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), foto = IFNULL(?, foto), correo = IFNULL(?, correo), biografia = IFNULL(?, biografia), nacionalidad = IFNULL(?, nacionalidad), sexo = IFNULL(?, sexo) WHERE codigo = ?',[nombres,apellidos,foto,correo,biografia,nacionalidad,sexo,id]);
        if (result.affectedRows === 0)
            return res.status(404).json({ mensaje: 'Autor: ' + id + ' no encontrado.' });
        const [rows] = await pool.query('SELECT * FROM autor WHERE codigo = ?',[id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const eliminarAutor = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM autor WHERE codigo = ?',[req.params.id]);
        if (result.affectedRows <= 0)
            return res.status(404).json({ mensaje: 'Autor no encontrado' });
        res.send('Autor con ID: ' + req.params.id + ', ha sido eliminado.');
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}
