// Rutas del modelo ciudadano

import { Router } from "express";
//! Importamos la logica del controlador para construir cada interaccion de la ruta: get, post, put, delete
import * as ciudadanoCtr from "../controllers/ciudadano.controller.js";
//! Instanciamos el metodo router de express para poder crear rutas
const router = Router();

//! Las rutas del modulo

//* Ruta para listar todo
router.get("/ciudadano/listartodos", ciudadanoCtr.getCiudadanos);
router.get("/ciudadano/listarporid/:id", ciudadanoCtr.getCiudadanosById);
router.post("/ciudadano/crear", ciudadanoCtr.postCiudadanos);
router.put("/ciudadano/editarporid/:id", ciudadanoCtr.putCiudadanos);
router.delete("/ciudadano/eliminarporid/:id", ciudadanoCtr.deleteCiudadanos);







export default router;
