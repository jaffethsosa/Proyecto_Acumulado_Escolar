const express = require('express');
const router = express.Router();
const seccionController = require('../controllers/seccion');

// Ruta para crear una nueva sección
router.post('/', seccionController.crearSeccion);

// Ruta para obtener todas las secciones
router.get('/', seccionController.getSecciones);

module.exports = router;
