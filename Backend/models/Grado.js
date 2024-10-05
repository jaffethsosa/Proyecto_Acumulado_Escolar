const mongoose = require('mongoose');

// Define el esquema para los grados
const gradoSchema = new mongoose.Schema({
  nombre: String
});

// Crea el modelo basado en el esquema
const Grado = mongoose.model('Grado', gradoSchema);

module.exports = Grado;