const Matricula = require('../models/Matricula');


exports.crearMatricula = async (req, res) => {
    try {
      console.log('Datos recibidos para crear matrícula:', req.body);
        const nuevaMatricula = new Matricula(req.body);
        await nuevaMatricula.save();
        res.status(201).json({ message: 'Matrícula creada exitosamente', matricula: nuevaMatricula });
      } catch (error) {
        console.error('Error al crear la matrícula:', error); // Mostrar el error en el log del servidor
        res.status(500).json({ message: 'Error al crear la matrícula', error });
      }
    };

    exports.getMatriculas = async (req, res) => {
      try {
          const matriculas = await Matricula.find()
              .populate('alumno clase seccion grado periodo'); 
          console.log('Matrículas encontradas:', matriculas); 
          res.status(200).json(matriculas);
      } catch (error) {
          console.error('Error al obtener las matrículas:', error); // Mostrar el error
          res.status(500).json({ message: 'Error al obtener las matrículas', error });
      }
  };
