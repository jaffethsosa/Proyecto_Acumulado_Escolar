import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Clase } from "../models/clase.module";

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  private apiUrl = 'http://localhost:3000/api/clases'; // URL de tu API

  constructor(private http: HttpClient) { }

  getClase(): Observable<Clase[]> {
    return this.http.get<Clase[]>(this.apiUrl);
  }
  

  guardarClase(clase: Clase): Observable<Clase> {
    return this.http.post<Clase>(`${this.apiUrl}`, clase);
  }
  
  actualizarClase(id: string, clase: Clase): Observable<Clase> {
    return this.http.put<Clase>(`${this.apiUrl}/${id}`, clase);
  }

  eliminarClase(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
