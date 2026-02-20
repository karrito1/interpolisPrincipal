//! Crea una constante con el puerto local o el asignado en las variables globales de la aplicacion
import app from "./app.js";
import dotenv from "dotenv"; //* Importa la libreria - No debe ir aqui, es un ejemplo
dotenv.config();
const PORT = 3000 || process.env.APP_PORT;
//? Funcion para encender la api (hacerla funcionar)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
  // console.log(process.env); //* Estas son todas las variables de entorno de NODE.JS
  // console.log(process.env.OS); //* Sistema operativo en que se ejecuta NODE.JS
  // console.log(process.env.NUMBER_OF_PROCESSORS); //* Numero de procesadores donde se ejecuta NODE.JS
  // console.log(process.env.NODE); //* Ruta donde esta instalado el NODE.JS
  // console.log(process.env.COMPUTERNAME); //* Nombre del equipo donde se esta ejecutando NODE.JS
  // console.log(process.env.HOST); //* Variable de entorno configurada con dotenv
});
