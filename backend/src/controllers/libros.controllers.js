import { pool } from '../conexion.js';

export const listarLibros = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const listarLibrosUser = async (req, res) => {
    try {
        const { libros } = req.body;
        if (!Array.isArray(libros))
            return res.status(400).json({ mensaje: 'La cadena debe ser un array de codigos.' });

        const placeholders = libros.map(() => '?').join(',');

        const query = 'SELECT * FROM libros WHERE codigo IN (' + placeholders + ')';

        const [result] = await pool.query(query, libros);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ mensaje: "Algo ha salido mal :(", error: error.message });
    }
}

export const listarLastLibro = async (req, res) => {
    const { cadena } = req.body;
    try {
        const [result] = await pool.query('SELECT CONCAT(SUBSTRING(codigo, 2, 2),SUBSTRING(codigo, 17, 4)) AS last FROM libros WHERE codigo LIKE ? ORDER BY codigo DESC LIMIT 1', [cadena]);
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({mensaje: "Algo ha salido mal :'("});
    }
}

export const obtenerLibro = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM libros WHERE codigo = ?',[req.params.id]);
        if (rows.length <= 0)
            return res.status(404).json({ mensaje: 'Libro no encontrado' });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const insertarLibro = async (req, res) => {
    const { codigo, titulo, existencias, precio, isbn, sinopsis, portada, numpags, anio, codigoAutor, codigoEditorial, categorias, formato, idioma, codigoPunt } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO libros (codigo, titulo, existencias, precio, isbn, sinopsis, portada, numpags, anio, codigo_autor, codigo_editorial, categorias, formato, idioma, codigo_punt) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[codigo, titulo, existencias, precio, isbn, sinopsis, portada, numpags, anio, codigoAutor, codigoEditorial, categorias, formato, idioma, codigoPunt]);
        res.send({
            id: rows.insertId, codigo, titulo, existencias, precio, isbn, sinopsis, portada, numpags, anio, codigoAutor, codigoEditorial, categorias, formato, idioma, codigoPunt
        });
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const modificarLibro = async (req, res) => {
    const { id } = req.params;
    const { titulo, existencias, precio, isbn, sinopsis, portada, numpags, anio, codigoAutor, codigoEditorial, categorias, formato, idioma, codigoPunt } = req.body;
    try {
        const [result] = await pool.query('UPDATE libros SET titulo = IFNULL(?,titulo), existencias = IFNULL(?, existencias), precio = IFNULL(?, precio), isbn = IFNULL(?, isbn), sinopsis = IFNULL(?, sinopsis), portada = IFNULL(?, portada), numpags = IFNULL(?,numpags), anio = IFNULL(?, anio), codigo_autor = IFNULL(?, codigo_autor), codigo_editorial = IFNULL(?, codigo_editorial), categorias = IFNULL(?, categorias), formato = IFNULL(?, formato), idioma = IFNULL(?, idioma), codigo_punt = IFNULL(?, codigo_punt) WHERE codigo = ?',[titulo, existencias, precio, isbn, sinopsis, portada, numpags, anio, codigoAutor, codigoEditorial, categorias, formato, idioma, codigoPunt,id]);
        if (result.affectedRows === 0)
            return res.status(404).json({ mensaje: 'Libro: ' + id + ' no encontrado.' });
        const [rows] = await pool.query('SELECT * FROM libros WHERE codigo = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}

export const eliminarLibro = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM libros WHERE codigo = ?', [req.params.id]);
        if (result.affectedRows <= 0)
            return res.status(404).json({ mensaje: 'Libro no encontrado.' });
        res.send('Libro con ID: ' + req.params.id + ', ha sido eliminado.');
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}
