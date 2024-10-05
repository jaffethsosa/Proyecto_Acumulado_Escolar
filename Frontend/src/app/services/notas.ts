import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota.module'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private apiUrl = 'http://localhost:3000/api/notas'; 

  constructor(private http: HttpClient) {}

  crearDesdeMatricula(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear-desde-matricula`, data);
  }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.apiUrl);
  }

  crearNota(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.apiUrl, nota);
  }

  actualizarNota(id: string, nota: Nota): Observable<Nota> {
    return this.http.put<Nota>(`${this.apiUrl}/${id}`, nota);
  }

  eliminarNota(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
