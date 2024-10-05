const Nota = require('../models/Nota');
const Matricula = require('../models/Matricula');

// Crear una nueva nota (POST)
exports.crearNota = async (req, res) => {
    try {
        const { matriculaId, alumnoId, nota, examen, asignatura } = req.body;
        const nuevaNota = new Nota({ matriculaId, alumnoId, nota, examen, asignatura });
        await nuevaNota.save();
        res.status(201).json({ message: 'Nota creada exitosamente', nota: nuevaNota });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la nota', error });
    }
};

// Obtener todas las notas (GET)
exports.obtenerNotas = async (req, res) => {
    try {
        const notas = await Nota.find().populate('matriculaId').populate('alumnoId');
        res.status(200).json(notas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las notas', error });
    }
};

// Actualizar una nota (PUT)
exports.actualizarNota = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de la nota desde los parámetros
        const actualizada = await Nota.findByIdAndUpdate(id, req.body, { new: true });
        if (!actualizada) {
            return res.status(404).json({ message: 'Nota no encontrada' });
        }
        res.status(200).json({ message: 'Nota actualizada exitosamente', nota: actualizada });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la nota', error });
    }
};

// Eliminar una nota (DELETE)
exports.eliminarNota = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de la nota desde los parámetros
        const eliminada = await Nota.findByIdAndDelete(id);
        if (!eliminada) {
            return res.status(404).json({ message: 'Nota no encontrada' });
        }
        res.status(200).json({ message: 'Nota eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la nota', error });
    }
};


exports.crearNotaDesdeMatricula = async (req, res) => {
  try {
    const matriculas = await Matricula.find().populate('alumno clase seccion grado periodo');
    
    // Suponiendo que deseas crear una nota para cada matrícula
    const notas = matriculas.map(matricula => {
      return {
        matriculaId: matricula._id,
        alumnoId: matricula.alumno._id,
        nota: req.body.nota, // Aquí puedes definir cómo se obtiene la nota
        examen: req.body.examen, // Igualmente para el examen
        total: req.body.total, // Y para el total
        asignatura: req.body.asignatura // Asignatura de la nota
      };
    });

    const notasGuardadas = await Nota.insertMany(notas);
    res.status(201).json({ message: 'Notas creadas exitosamente', notas: notasGuardadas });
  } catch (error) {
    console.error('Error al crear notas:', error);
    res.status(500).json({ message: 'Error al crear notas', error });
  }
};

