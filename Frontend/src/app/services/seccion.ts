import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seccion } from '../models/seccion.module';



@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private baseUrl = 'http://localhost:3000/api/secciones';

  constructor(private http: HttpClient) {}

  getSecciones(): Observable<Seccion[]> {
    return this.http.get<Seccion[]>(this.baseUrl);
  }

  createSeccion(seccion: Seccion): Observable<Seccion> {
    return this.http.post<Seccion>(this.baseUrl, seccion);
  }
}