# Acumulado Escolar 🎓

**Acumulado Escolar** 

Es una aplicación web desarrollada con el propósito de facilitar la gestión académica de alumnos y clases. 
Permite a los maestros añadir información sobre alumnos, calcular acumulados de tareas y exámenes, 
y manejar la matrícula por clases,secciones, y periodos académicos.

## Características

- Gestión de alumnos y clases.
- Cálculo automático del acumulado de tareas y exámenes.
- CRUD (Crear, Leer, Actualizar, Eliminar) de alumnos y clases.
- Filtrado de alumnos por clase, sección y grado.
- Validaciones en la creación de periodos académicos.
- Sección para matrícula de alumnos por clase y sección.
- Interfaz de usario amigable.

## Tecnologías Utilizadas

- **Frontend**: Angular, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB Atlas
- **ORM**: Mongoose para la gestión de modelos
- **Base de datos**: MongoDB

## Estructura del Proyecto

acumulado-escolar/
├── backend/               # Código del backend (Node.js + Express)
├── frontend/              # Código del frontend (Angular)
├── .env                   # Archivo de variables de entorno
├── README.md              # Documentación del proyecto
├── package.json           # Información del proyecto y scripts
└── yarn.lock              # Bloqueo de dependencias de Yarn

## Backend
El backend se encuentra en la carpeta backend/ y está encargado de gestionar las rutas de la API, 
la conexión con la base de datos, y la lógica de negocio.

## Frontend
El frontend se encuentra en la carpeta frontend/. Está desarrollado en Angular y cuenta con componentes para la gestión de alumnos, clases, y matrículas.

## Mejoras Futuras

- Implementar autenticación para maestros y administradores.
- Añadir un dashboard con estadísticas y gráficos de rendimiento de los alumnos.
- Exportación de reportes en PDF o Excel.
- Notificaciones y alertas para fechas importantes como cierre de periodos.
