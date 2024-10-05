const express = require('express');
const router = express.Router();
const periodoControllers = require('../controllers/periodo');

// Ruta para crear un nuevo grado
router.post('/', periodoControllers.crearPeriodo);

// Ruta para obtener todos los grados
router.get('/',periodoControllers.getPeriodo);

module.exports = router;
