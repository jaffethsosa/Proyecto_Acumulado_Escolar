const mongoose = require('mongoose');

// Define el esquema para las secciones
const seccionSchema = new mongoose.Schema({
  nombre: String
});

// Crea el modelo basado en el esquema
const Seccion = mongoose.model('Seccion', seccionSchema);

module.exports = Seccion;
