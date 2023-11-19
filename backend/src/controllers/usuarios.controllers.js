import { pool } from '../conexion.js';

export const listarUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM users');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const listarLastUser = async(req, res) => {
    try {
        const [result] = await pool.query('SELECT SUBSTRING(codigo, 3, 8) AS last FROM users ORDER BY codigo DESC LIMIT 1');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({mensaje: "Algo ha salido mal :'("});
    }
}

export const obtenerUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE codigo = ?', [req.params.id]);
        if (rows.length <= 0)
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const insertarUsuario = async (req, res) => {
    const { codigo, email, password, nombres, apellidos, edad, nacimiento, sexo, tipo } = req.body;

    try {
        const [rows] = await pool.query('INSERT INTO users(codigo, correo, contra, nombres, apellidos, edad, fechanac, sexo, tipo_codigo, carrito, deseos) VALUES (?,?,?,?,?,?,?,?,?,null,null)', [codigo, email, password, nombres, apellidos, edad, nacimiento, sexo, tipo]);
        res.send({
            id: rows.insertId,
            codigo,
            email,
            password,
            nombres,
            apellidos,
            edad,
            nacimiento,
            sexo,
            tipo
        });
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const modificarUsuario = async (req, res) => {
    const { id } = req.params;
    const { email, password, nombres, apellidos, edad, nacimiento, sexo, tipo, carrito, deseos } = req.body;
    try {
        const [result] = await pool.query('UPDATE users SET correo = IFNULL(?,correo), contra = IFNULL(?,contra), nombres = IFNULL(?,nombres), apellidos = IFNULL(?,apellidos), edad = IFNULL(?,edad), fechanac = IFNULL(?,fechanac), sexo = IFNULL(?,sexo), tipo_codigo = IFNULL(?,tipo_codigo), carrito = IFNULL(?,carrito), deseos = IFNULL(?,deseos) WHERE codigo = ?', [email, password, nombres, apellidos, edad, nacimiento, sexo, tipo, carrito, deseos, id]);
        if (result.affectedRows === 0)
            return res.status(404).json({ mensaje: 'Usuario: ' + id + ' no encontrado.' });
        const [rows] = await pool.query('SELECT * FROM users WHERE codigo = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const eliminarUsuario = async (req, res) => {

    try {
        const result = await pool.query('DELETE FROM users WHERE codigo = ?', [req.params.id]);
        if (result.affectedRows <= 0)
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.send('Usuario con ID: ' + req.params.id + ', ha sido eliminado.');
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}