import MySQL from "mysql2/promise";
import dotenv from "dotenv"; //* Importa la libreria - No debe ir aqui, es un ejemplo
dotenv.config();
let cnx;
try {
  cnx = MySQL.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  const conexion = await cnx.getConnection();
  console.log(`Conexion a la base de datos establecida exitosamente`);
  conexion.release(); //* Cierra la conexion prueba
  //   console.log("cnx exitosa!");
} catch (error) {
  console.log(`Ah ocurrido un error en la cnx: ${error.message}`);
}
export const db = cnx;
