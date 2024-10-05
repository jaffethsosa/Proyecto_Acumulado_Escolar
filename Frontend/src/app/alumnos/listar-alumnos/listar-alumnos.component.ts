import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; 
import { Alumno } from '../../models/alumno.module';
import { AlumnoService } from '../../services/alumnos';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css'],
  providers: [DatePipe] 
})
export class ListarAlumnosComponent implements OnInit {
  
  listAlumnos: Alumno[] = [];
  alumnoSeleccionado: Alumno   | null = null;

  constructor(private _alumnosService: AlumnoService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos(): void {
    this._alumnosService.getAlumno().subscribe(data => {
      this.listAlumnos = data.map(alumno => ({
        ...alumno,
        fechaNac: this.formatDateOnly(alumno.fechaNac) 
      }));
    });
  }

  formatDateOnly(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Extrae solo YYYY-MM-DD
  }

  formatFechaNac(fechaNac: string): string {
    if (!fechaNac) {
      console.error('Fecha vacía recibida');
      return '';
    }
  
    const date = new Date(fechaNac);
    if (isNaN(date.getTime())) {
      console.error('Fecha inválida recibida:', fechaNac);
      return '';
    }
    
    // Utiliza un formato estándar
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  iniciarEdicion(alumno: Alumno): void {
    alumno.editing = true;
  }

  cancelarEdicion(alumno: Alumno): void {
    alumno.editing = false;
    this.obtenerAlumnos(); 
  }

  actualizarAlumno(alumno: Alumno): void {

    alumno.fechaNac = formatDate(new Date(alumno.fechaNac), 'yyyy-MM-dd', 'en-US');
  
  this._alumnosService.actualizarAlumno(alumno._id, alumno).subscribe(() => {
    alumno.editing = false;
    this.obtenerAlumnos();
  }, error => {
    console.error('Error al actualizar alumno', error);
  });
  }

  eliminarAlumno(id: string): void {
    const confirmar = confirm('¿Estás seguro de que deseas eliminar este alumno?');
    if (confirmar) {
      this._alumnosService.eliminarAlumno(id).subscribe(() => {
        this.listAlumnos = this.listAlumnos.filter(alumno => alumno._id !== id);
      }, error => {
        console.error('Error al eliminar alumno', error);
      });
    }
  }
}
