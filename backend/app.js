//! API REST: GET, POST, PUT, DELETE  =>  express

//? Importamos la libreria express
import express from "express";
import cors from "cors";
import ciudadanoRutas from "./src/routes/ciudadano.route.js";
// import { usuario } from "./modules/usuario.js";

//* Instanciamos la libreria en un objeto para poder manipular - app
const app = express();

//* Middlewares
app.use(express.json()); // Se usa para que el servidor entienda JSON en body
app.use(cors());

//* Rutas
app.use("/api", ciudadanoRutas);

export default app;
    