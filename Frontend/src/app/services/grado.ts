import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grado } from '../models/grado.module';


@Injectable({
  providedIn: 'root'
})
export class GradoService {
  private baseUrl = 'http://localhost:3000/api/grados';

  constructor(private http: HttpClient) {}

  getGrados(): Observable<Grado[]> {
    return this.http.get<Grado[]>(this.baseUrl);
  }

  crearGrado(grado: Grado): Observable<Grado> {
    return this.http.post<Grado>(this.baseUrl, grado);
  }
}
