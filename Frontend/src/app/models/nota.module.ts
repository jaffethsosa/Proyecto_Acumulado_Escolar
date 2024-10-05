export interface Nota {
    _id?: string; 
    matriculaId: string;
    alumnoId: string;
    nota: number;
    examen: number;
    total?: number; 
    asignatura: string;
  }