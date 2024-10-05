const Periodo = require('../models/Periodo');

// Crear un nuevo periodo
exports.crearPeriodo = async (req, res) => {
  try {
    const { anioInicio, anioFin, descripcion } = req.body;
    
    // Crear un nuevo periodo con los datos recibidos
    const nuevoPeriodo = new Periodo({ anioInicio, anioFin, descripcion });
    await nuevoPeriodo.save();
    
    // Responder con un mensaje de éxito
    res.status(201).json({ message: 'Periodo creado exitosamente', periodo: nuevoPeriodo });
  } catch (error) {
    if (error.code === 11000) { // Error de clave duplicada, si es relevante
      res.status(400).json({ message: 'Ya existe un periodo con estos años' });
    } else {
      res.status(500).json({ message: 'Error al crear el periodo', error });
    }
  }
};

// Obtener todos los periodos
exports.getPeriodo = async (req, res) => {
  try {
    const periodos = await Periodo.find();
    res.status(200).json(periodos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los periodos', error });
  }
};
