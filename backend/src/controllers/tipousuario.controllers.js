import { pool } from "../conexion.js";

export const listarTipoUser = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM tipousuario');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo ha salido mal :'(" });
    }
}
