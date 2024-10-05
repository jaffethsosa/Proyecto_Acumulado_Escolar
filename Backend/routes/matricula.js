const express = require('express');
const router = express.Router();
const matriculaControllers = require('../controllers/matricula');

router.post('/', matriculaControllers.crearMatricula);
router.get('/', matriculaControllers.getMatriculas);

module.exports = router;
