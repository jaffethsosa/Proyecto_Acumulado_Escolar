import { Grado } from "./grado.module";
import { Periodo } from "./periodo.module";
import { Seccion } from "./seccion.module";

export interface Clase {
  _id: string;
  nombre: string;
  grado: Grado;
  seccion: Seccion;
  periodo:Periodo;
  editing?: boolean;
  }