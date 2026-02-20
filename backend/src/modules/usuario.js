//! Modulo para manipulacion del usuario

import express from "express";
import { cnx } from "./DBdatos.js";

const usuario = express();

// CRUD basico de usuarios

//* Listar todos los usuarios
usuario.get("/usuario/listartodos", (request, response) => {
  //? Hacemos la consulta
  let sql = "SELECT * FROM usuario ORDER BY id_usuario ASC";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Listar usuario por ID
usuario.get("/usuario/listarporid/:id", (request, response) => {
  //? Recibimos el parametro de la consulta
  const id = request.params.id;
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "SELECT * FROM usuario WHERE id_usuario = ?";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [id], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Borrar usuario (borrado real)
usuario.delete("/usuario/borrarusuarioporid/:id", (request, response) => {
  //? Recibimos el parametro de la consulta
  const id = request.params.id;
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "DELETE FROM usuario WHERE id_usuario = ?";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [id], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Crear usuario
usuario.post("/usuario/crear", (request, response) => {
  //? Recibimos los parametros enviados en la consulta - payload- body en un objeto JS
  let datosFormulario = {
    nombre_usuario: request.body.nombre_usuario,
    apellidos_usuario: request.body.apellidos_usuario,
    email_usuario: request.body.email_usuario,
    password_usuario: request.body.password_usuario,
    avatar_usuario: request.body.avatar_usuario,
    rol_usuario: request.body.rol_usuario,
  };
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "INSERT INTO usuario SET ?;";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [datosFormulario], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

//* Crear usuario
usuario.put("/usuario/editar/:id", (request, response) => {
  //? Recibimos una payload en el body de la peticion (request) y el id de la persona que se edita
  let datosFormulario = {
    nombre_usuario: request.body.nombre_usuario,
    apellidos_usuario: request.body.apellidos_usuario,
    email_usuario: request.body.email_usuario,
    password_usuario: request.body.password_usuario,
    avatar_usuario: request.body.avatar_usuario,
    rol_usuario: request.body.rol_usuario,
  };
  //? Recibimos el parametro de la consulta
  const id = request.params.id;
  //? Hacemos la consulta, se recomiendan consultas parametrizadas
  let sql = "UPDATE usuario SET ? WHERE id_usuario = ?;";
  //? Ejecutamos la consulta en BD
  cnx.query(sql, [datosFormulario, id], (error, result, fields) => {
    response.status(200).send(result);
  });
  //? Devolver data en formato JSON
  //   response.status(200).send({});
});

export { usuario };
