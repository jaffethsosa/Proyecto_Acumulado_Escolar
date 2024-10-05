const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notas');

// Rutas para las notas
router.post('/notas', notaController.crearNota); 
router.get('/notas', notaController.obtenerNotas); 
router.put('/notas/:id', notaController.actualizarNota); 
router.delete('/notas/:id', notaController.eliminarNota); 
router.post('/notas/crear-desde-matricula', notaController.crearNotaDesdeMatricula);

module.exports = router;
