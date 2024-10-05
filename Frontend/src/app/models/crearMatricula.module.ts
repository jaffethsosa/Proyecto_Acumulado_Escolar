import { Alumno } from "./alumno.module";
import { Clase } from "./clase.module";
import { Grado } from "./grado.module";
import { Periodo } from "./periodo.module";
import { Seccion } from "./seccion.module";

export interface CrearMatricula {
    alumno: Alumno;
    clase: Clase;
    periodo: Periodo;
    grado: Grado;
    seccion: Seccion;
    estado?: string;
  }
  