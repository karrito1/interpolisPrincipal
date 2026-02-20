//! Capa modelo para el modulo de ciudadanos
//! Importamos la conexion
import { db } from "./DBdatos.js";

//! Creamos el modulo : Usando el concepto de orientado a objetos
//! Clase modelo correspondiente a ciudadano

export const ciudadanoModel = {
  //! Listar Todos : Aplicamos funciones asincronicas para aprovechar las promesas (los hilos de ejecucion)
  findALL: async () => {
    const sql = "SELECT * FROM ciudadano ORDER BY apellido_ciudadano ASC;";
    //* Almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },
  //! Buscar por id, recibe el id como parametro
  findById: async (id) => {
    const sql = "SELECT * FROM ciudadano WHERE codigo_ciudadano = ?;";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM ciudadano WHERE codigo_ciudadano = ?;";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (datos) => {
    const sql = "INSERT INTO ciudadano SET ?;";
    const [rows] = await db.query(sql, [datos]);
    return rows;
  },
  update: async (datos, id) => {
    const sql = "UPDATE ciudadano SET ? WHERE codigo_ciudadano = ?";
    const [rows] = await db.query(sql, [datos, id]);
    return rows;
  },
};
