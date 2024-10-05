import { Alumno } from "./alumno.module";
import { Clase } from "./clase.module";
import { Grado } from "./grado.module";
import { Periodo } from "./periodo.module";
import { Seccion } from "./seccion.module";

// En matricula.module.ts
export interface Matricula {
    _id: string;
    alumno: {
      _id: string;
      nombres: string;
      apellidos: string;
      dni: number;
      fechaNac: string;
      direccion: string;
      telefono: number;
      email: string;
      matriculas: any[]; 
    };
    clase: {
      _id: string;
      nombre: string;
      grado: string;
      seccion: string;
    };
    periodo: {
      _id: string;
      anioInicio: number;
      anioFin: number;
      descripcion: string;
    };
    grado: {
      _id: string;
      nombre: string;
    };
    seccion: {
      _id: string;
      nombre: string;
    };
    estado?: string;
  }
  
