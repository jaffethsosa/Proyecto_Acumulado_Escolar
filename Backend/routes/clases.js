const express = require('express');
const router = express.Router();
const { getClases, crearClase, eliminarClase, actualizarClase, verificarNombre } = require('../controllers/clases');

// Obtener todas las clases
router.get('/', getClases);

// Crear una nueva clase
router.post('/', crearClase);

// Eliminar una clase
router.delete('/:id', eliminarClase);

// Actualizar una clase
router.put('/:id', actualizarClase);

//Verificar nombre de Clase
router.get('/verificarNombre/:nombre', verificarNombre);

module.exports = router;