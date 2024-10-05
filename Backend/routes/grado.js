const express = require('express');
const router = express.Router();
const { crearGrado, getGrados} = require('../controllers/grado');

// Ruta para crear un nuevo grado
router.post('/', crearGrado);

// Ruta para obtener todos los grados
router.get('/',getGrados);

module.exports = router;
