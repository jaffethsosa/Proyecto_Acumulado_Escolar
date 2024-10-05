const Alumno = require('../models/Alumno');

// Obtener todos los alumnos
const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find(); // Obtener todos los alumnos
        res.json(alumnos);
    } catch (error) {
        console.error('Error al obtener los alumnos:', error);
        res.status(500).json({ message: 'Error al obtener los alumnos', error: error.message });
    }
};

// Crear un nuevo alumno
const crearAlumno = async (req, res) => {
    const { nombres, apellidos, dni, fechaNac, direccion, telefono, email } = req.body;

    if (!nombres || !apellidos || !dni || !fechaNac || !direccion || !telefono || !email) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
        const nuevoAlumno = new Alumno({ nombres, apellidos, dni, fechaNac, direccion, telefono, email });
        await nuevoAlumno.save();
        res.status(201).json(nuevoAlumno);
    } catch (error) {
        console.error('Error al crear el alumno:', error);
        res.status(500).json({ message: 'Error al crear el alumno', error: error.message });
    }
};

// Eliminar un alumno
const eliminarAlumno = async (req, res) => {
    const { id } = req.params;

    try {
        const alumnoEliminado = await Alumno.findByIdAndDelete(id);

        if (!alumnoEliminado) {
            return res.status(404).json({ message: 'Alumno no encontrado' });
        }

        res.status(200).json({ message: 'Alumno eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el alumno:', error);
        res.status(500).json({ message: 'Error al eliminar el alumno' });
    }
};

// Actualizar un alumno
const actualizarAlumno = async (req, res) => {
    const { id } = req.params;
    const { nombres, apellidos, dni, fechaNac, direccion, telefono, email } = req.body;
  
    if (!nombres || !apellidos || !dni || !fechaNac || !direccion || !telefono || !email) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
  
    try {
      const alumnoActualizado = await Alumno.findByIdAndUpdate(
        id,
        { nombres, apellidos, dni, fechaNac, direccion, telefono, email },
        { new: true, runValidators: true }
      );
  
      if (!alumnoActualizado) {
        return res.status(404).json({ message: 'Alumno no encontrado' });
      }
  
      res.status(200).json(alumnoActualizado);
    } catch (error) {
      console.error('Error al actualizar el alumno:', error);
      res.status(500).json({ message: 'Error al actualizar el alumno' });
    }
  };
  

const verificarNombre = async (req, res) => {
    const { nombre } = req.params;

    try {
        const alumno = await Alumno.findOne({ nombre: nombre });
        if (alumno) {
            return res.json({ existe: true });
        }
        return res.json({ existe: false });
    } catch (error) {
        console.error('Error al verificar el nombre:', error);
        return res.status(500).json({ message: 'Error al verificar el nombre', error: error.message });
    }
};

module.exports = { getAlumnos, crearAlumno, eliminarAlumno, actualizarAlumno, verificarNombre };
