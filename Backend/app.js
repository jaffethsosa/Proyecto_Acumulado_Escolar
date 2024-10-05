require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./config/database');
const app = express();

// Configurar cors y body-parser
app.use(cors());
app.use(express.json());

// Conectar a la BD
dbConnection();

// Rutas
app.use('/api/alumnos', require('./routes/alumnos'));
app.use('/api/clases', require('./routes/clases'));

app.use('/api/grados', require('./routes/grado'));
app.use('/api/secciones', require('./routes/seccion'));
app.use('/api/periodos', require ('./routes/periodo'));

app.use('/api/matriculas', require('./routes/matricula'))
app.use('/api/notas', require('./routes/notas'));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
