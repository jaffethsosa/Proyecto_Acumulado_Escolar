const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

// Define el esquema para las clases
const claseSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  grado: { type: Schema.Types.ObjectId, ref: 'Grado' },
  seccion: { type: Schema.Types.ObjectId, ref: 'Seccion' },
  periodo: { type: Schema.Types.ObjectId, ref: 'Periodo' } 
});

// Crea el modelo basado en el esquema
const Clase = mongoose.model('Clase', claseSchema);

module.exports = Clase;
