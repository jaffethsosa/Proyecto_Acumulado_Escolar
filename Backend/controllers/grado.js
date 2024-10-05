const Grado = require('../models/Grado');

// Crear un nuevo grado
const crearGrado = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoGrado = new Grado({ nombre });
    await nuevoGrado.save();
    res.status(201).json({ message: 'Grado creado exitosamente', grado: nuevoGrado });
  } catch (error) {
    if (error.code === 11000) { // Error de clave duplicada (nombre único)
      res.status(400).json({ message: 'Ya existe un grado con este nombre' });
    } else {
      res.status(500).json({ message: 'Error al crear el grado', error });
    }
  }
};

// Obtener todos los grados
const getGrados = async (req, res) => {
  try {
    const grados = await Grado.find();
    res.status(200).json(grados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los grados', error });
  }
};


module.exports = {
    crearGrado,
    getGrados
  };