const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const PeriodoSchema = new mongoose.Schema({
  anioInicio: { type: Number, required: true },
  anioFin: { type: Number, required: true },
  descripcion: { type: String }
  });

  module.exports = model('Periodo', PeriodoSchema);
  