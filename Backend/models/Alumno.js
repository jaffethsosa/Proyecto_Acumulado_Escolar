const { Schema, model, default: mongoose } = require('mongoose');

const AlumnoSchema = new Schema({
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  fechaNac: {
    type: Date,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  matriculas:[{type: mongoose.Schema.Types.ObjectId, ref: 'Matricula'}]
});

// Middleware para calcular total antes de guardar
AlumnoSchema.pre('save', function (next) {
  this.total = this.tareas + this.examenes;
  next();
});

AlumnoSchema.methods.toJSON = function() {
  const alumno = this.toObject();
  // Formatea la fecha a solo YYYY-MM-DD
  alumno.fechaNac = alumno.fechaNac.toISOString().split('T')[0];
  return alumno;
};

module.exports = model('Alumno', AlumnoSchema);