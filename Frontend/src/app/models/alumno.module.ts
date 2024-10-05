export interface Alumno {
    
       _id: string;
       nombres: string;
       apellidos: string;
       dni: number;
       fechaNac: string;
       direccion: string;
       telefono: number;
       email: string;
       editing?: boolean; 
    
  }