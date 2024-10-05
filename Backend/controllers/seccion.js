const Seccion = require('../models/Seccion');

// Crear una nueva sección
exports.crearSeccion = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevaSeccion = new Seccion({ nombre });
    await nuevaSeccion.save();
    res.status(201).json({ message: 'Sección creada exitosamente', seccion: nuevaSeccion });
  } catch (error) {
    if (error.code === 11000) { // Error de clave duplicada
      res.status(400).json({ message: 'Ya existe una sección con este nombre' });
    } else {
      res.status(500).json({ message: 'Error al crear la sección', error });
    }
  }
};

// Obtener todas las secciones
exports.getSecciones = async (req, res) => {
  try {
    const secciones = await Seccion.find();
    res.status(200).json(secciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las secciones', error });
  }
};
