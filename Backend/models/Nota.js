const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const NotaSchema = new mongoose.Schema({
    matriculaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Matricula', required: true },
    alumnoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true },
    nota: { type: Number, required: true },
    examen: { type: String, required: true },
    total: { type: Number, required: true },
    asignatura: { type: String, required: true }
  }, { timestamps: true });

NotaSchema.pre('save', function (next) {
    this.total = this.nota + this.examen;
    next();
  });

module.exports = model('Nota', NotaSchema);