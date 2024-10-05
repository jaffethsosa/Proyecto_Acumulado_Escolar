import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrearMatricula } from '../models/crearMatricula.module';
import { Matricula } from '../models/matricula.module';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
    private apiUrl = 'http://localhost:3000/api/matriculas'; 

    constructor(private http: HttpClient) { }
  
    // Crear una nueva matrícula
    crearMatricula(matricula: CrearMatricula): Observable<Matricula> {
      return this.http.post<Matricula>(this.apiUrl, matricula);
    }
  
    // Obtener todas las matrículas
    getMatriculas(): Observable<Matricula[]> {
      return this.http.get<Matricula[]>(this.apiUrl);
    }
  
    // Obtener una matrícula por ID
    getMatricula(): Observable<Matricula[]> {
      return this.http.get<Matricula[]>(this.apiUrl); 
    }
    // Actualizar una matrícula
    actualizarMatricula(id: string, matricula: CrearMatricula): Observable<Matricula> {
      return this.http.put<Matricula>(`${this.apiUrl}/${id}`, matricula);
    }
  
    // Eliminar una matrícula
    eliminarMatricula(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
