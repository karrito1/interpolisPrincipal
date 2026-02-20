//! Modulo para manipulacion del usuario

import express from "express";
import { cnx } from "./DBdatos.js";

const ciudadano = express();

// CRUD basico de ciudadanos

//* Listar todos los ciudadanos
ciudadano.get("/ciudadano/listartodos", (request, response) => {
  //? Hacemos la consulta
  let sql = "SELECT * FROM ciudadano ORDER BY apellido_ciudadano ASC";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Listar ciudadano por ID
ciudadano.get("/ciudadano/listarporid/:id", (request, response) => {
  //? Recibimos el parametro de la consulta
  const id = request.params.id;
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "SELECT * FROM ciudadano WHERE codigo_ciudadano = ?";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [id], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Borrar ciudadano (borrado real)
ciudadano.delete("/ciudadano/borrarciudadanoporid/:id", (request, response) => {
  //? Recibimos el parametro de la consulta
  const id = request.params.id;
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "DELETE FROM ciudadano WHERE codigo_ciudadano = ?";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [id], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Crear ciudadano
ciudadano.post("/ciudadano/crear", (request, response) => {
  //? Recibimos los parametros enviados en la consulta - payload- body en un objeto JS
  console.log("datos: " + request.body);
  let datosFormulario = {
    nombre_ciudadano: request.body.nombre_ciudadano,
    apellido_ciudadano: request.body.apellido_ciudadano,
    apodo_ciudadano: request.body.apodo_ciudadano,
    fecha_nacimiento_ciudadano: request.body.fecha_nacimiento_ciudadano,
    planeta_origen_ciudadano: request.body.planeta_origen_ciudadano,
    planeta_residencia_ciudadano: request.body.planeta_residencia_ciudadano,
    foto_ciudadano: request.body.foto_ciudadano,
    codigo_qr_ciudadano: request.body.codigo_qr_ciudadano,
    estado_ciudadano: request.body.estado_ciudadano,
  };
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "INSERT INTO ciudadano SET ?;";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [datosFormulario], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Crear ciudadano
ciudadano.put("/ciudadano/editar/:id", (request, response) => {
  //? Recibimos una payload en el body de la peticion (request) y el id de la persona que se edita
  let datosFormulario = {
    nombre_ciudadano: request.body.nombre_ciudadano,
    apellido_ciudadano: request.body.apellido_ciudadano,
    apodo_ciudadano: request.body.apodo_ciudadano,
    fecha_nacimiento_ciudadano: request.body.fecha_nacimiento_ciudadano,
    planeta_origen_ciudadano: request.body.planeta_origen_ciudadano,
    planeta_residencia_ciudadano: request.body.planeta_residencia_ciudadano,
    foto_ciudadano: request.body.foto_ciudadano,
    codigo_qr_ciudadano: request.body.codigo_qr_ciudadano,
    estado_ciudadano: request.body.estado_ciudadano,
  };
  //? Recibimos el parametro de la consulta
  const id = request.params.id;
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "UPDATE ciudadano SET ? WHERE codigo_ciudadano = ?;";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [datosFormulario, id], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

export { ciudadano };
