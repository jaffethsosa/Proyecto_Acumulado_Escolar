import { Alumno } from './../models/alumno.module';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as moment from 'moment';


@Injectable({
providedIn: 'root'
})

export class AlumnoService{

    private apiUrl = 'http://localhost:3000/api/alumnos'; // URL de tu API

    constructor(private http: HttpClient) { }
  
    getAlumno(): Observable<Alumno[]> {
        return this.http.get<Alumno[]>(`${this.apiUrl}`);
    }
  
    guardarAlumno(alumno: Alumno): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}`, alumno); 
    }
  
    actualizarAlumno(id: string, alumno: Alumno): Observable<Alumno> {
      return this.http.put<Alumno>(`${this.apiUrl}/${id}`, alumno);
    }
  
    eliminarAlumno(id: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
      }
    
    verificarNombre(nombre: string): Observable<{ existe: boolean }> {
      return this.http.get<{ existe: boolean }>(`${this.apiUrl}/verificarNombre/${nombre}`);
    }

  }