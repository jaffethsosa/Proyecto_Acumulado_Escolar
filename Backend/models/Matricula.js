
const mongoose = require('mongoose');

const matriculaSchema = new mongoose.Schema({
  alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true },
  clase: { type: mongoose.Schema.Types.ObjectId, ref: 'Clase', required: true },
  periodo: { type: mongoose.Schema.Types.ObjectId, ref: 'Periodo', required: true },
  grado: { type: mongoose.Schema.Types.ObjectId, ref: 'Grado', required: true },
  seccion: { type: mongoose.Schema.Types.ObjectId, ref: 'Seccion', required: true },
  estado: { type: String, default: 'activa' },
});

module.exports = mongoose.model('Matricula', matriculaSchema);
