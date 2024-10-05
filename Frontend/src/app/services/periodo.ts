import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Periodo } from '../models/periodo.module'; // Asegúrate de tener el modelo

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private baseUrl = 'http://localhost:3000/api/periodos'; // Cambia según la ruta de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los periodos
  getPeriodos(): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(this.baseUrl);
  }

  // Crear un nuevo periodo
  crearPeriodo(periodo: Periodo): Observable<Periodo> {
    return this.http.post<Periodo>(`${this.baseUrl}`, periodo);
  }

  // Actualizar un periodo existente
  actualizarPeriodo(id: string, periodo: Periodo): Observable<Periodo> {
    return this.http.put<Periodo>(`${this.baseUrl}/${id}`, periodo);
  }

  // Eliminar un periodo
  eliminarPeriodo(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
