const express = require('express');
const router = express.Router();
const { getAlumnos, crearAlumno, eliminarAlumno, actualizarAlumno, verificarNombre } = require('../controllers/alumnos');

// Rutas
router.get('/', getAlumnos); 
router.post('/', crearAlumno); 
router.delete('/:id', eliminarAlumno); 
router.put('/:id', actualizarAlumno); 

router.get('/verificarNombre/:nombre', verificarNombre);


module.exports = router;