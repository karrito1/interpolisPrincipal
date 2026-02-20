// Controlador para ciudadano: encargado de escuchar y responder peticiones

import { ciudadanoModel } from "../models/ciudadano.model.js";

export const getCiudadanos = async (req, res) => {
  // Codigo protegido con Try/Catch
  try {
    const results = await ciudadanoModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los ciudadanos",
    });
  }
};
export const getCiudadanosById = async (req, res) => {
  // Codigo protegido con Try/Catch
  try {
    const results = await ciudadanoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el ciudadano",
    });
  }
};
export const postCiudadanos = async (req, res) => {
  try {
    const results = await ciudadanoModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al crear el ciudadano",
    });
  }
};
export const putCiudadanos = async (req, res) => {
  try {
    const results = await ciudadanoModel.update(req.body, req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el ciudadano",
    });
  }
};
export const deleteCiudadanos = async (req, res) => {
  try {
    const results = await ciudadanoModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al eliminar el ciudadano",
    });
  }
};
