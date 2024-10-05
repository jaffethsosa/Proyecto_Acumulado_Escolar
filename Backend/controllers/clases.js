const Clase = require('../models/Clase');

const getClases = async (req, res) => {
  try {
    const clases = await Clase.find()
      .populate('grado') // Si también quieres la información del grado
      .populate('seccion') // Si también quieres la información de la sección
      .populate('periodo'); // Aquí populamos el periodo

    res.status(200).json(clases);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las clases', error });
  }
};


const crearClase = async (req, res) => {
  const { nombre, grado, seccion, periodo } = req.body;

  if (!nombre || !grado || !seccion || !periodo) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const nuevaClase = new Clase({ nombre, grado, seccion, periodo });
    await nuevaClase.save();
    res.status(201).json(nuevaClase);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la clase', error: error.message });
  }
};


const eliminarClase = async (req, res) => {
  const { id } = req.params;

  try {
    const claseEliminada = await Clase.findByIdAndDelete(id);
    if (!claseEliminada) {
      return res.status(404).json({ message: 'Clase no encontrada' });
    }
    res.status(200).json({ message: 'Clase eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la clase' });
  }
};

const actualizarClase = async (req, res) => {
  const { id } = req.params;
  const { nombre, grado, seccion, periodo } = req.body;

  try {
    const claseActualizada = await Clase.findByIdAndUpdate(id, { nombre, grado, seccion, periodo }, { new: true });
    if (!claseActualizada) {
      return res.status(404).json({ message: 'Clase no encontrada' });
    }
    res.status(200).json(claseActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la clase' });
  }
};


const verificarNombre = async (req, res) => {
  const { nombre } = req.params;

  try {
      const clase = await Clase.findOne({ nombre: nombre });
      if (clase) {
          return res.json({ existe: true });
      }
      return res.json({ existe: false }); 
  } catch (error) {
      console.error('Error al verificar el nombre:', error);
      return res.status(500).json({ message: 'Error al verificar el nombre', error: error.message });
  }
};

module.exports = {
  getClases,
  crearClase,
  eliminarClase,
  actualizarClase,
  verificarNombre
};