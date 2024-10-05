import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../../services/matriculas';
import { GradoService } from '../../services/grado';
import { SeccionService } from '../../services/seccion';
import { ClaseService } from '../../services/clase';
import { Matricula } from '../../models/matricula.module';
import { Grado } from '../../models/grado.module';
import { Seccion } from '../../models/seccion.module';
import { Clase } from '../../models/clase.module';

@Component({
  selector: 'app-listado-notas',
  templateUrl: './listado-notas.component.html',
  styleUrls: ['./listado-notas.component.css']
})
export class ListadoNotasComponent implements OnInit {
  
  grados: Grado[] = []; 
  secciones: Seccion[] = []; 
  clases: Clase[] = []; 
  matriculas: Matricula[] = [];
  matriculasFiltradas: Matricula[] = []; 

  filtroNombre = '';
  filtroGrado = '';
  filtroSeccion = '';
  filtroClase = '';

  alumnoSeleccionado: any = null;

  constructor(
    private matriculaService: MatriculaService,
    private gradoService: GradoService,
    private seccionService: SeccionService,
    private claseService: ClaseService
  ) {}

  ngOnInit() {
    
    this.cargarDatos();
  }

  cargarDatos() {
    this.gradoService.getGrados().subscribe(data => {
      this.grados = data;
    });

    this.seccionService.getSecciones().subscribe(data => {
      this.secciones = data;
    });

    this.claseService.getClase().subscribe(data => {
      this.clases = data;
    });

    this.matriculaService.getMatriculas().subscribe(data => {
      this.matriculas = data;
      this.matriculasFiltradas = data; // Al inicio, muestra todas las matrículas
    });
  }

  filtrar() {
    this.matriculasFiltradas = this.matriculas.filter(matricula => {
      const matchNombre = this.filtroNombre ? matricula.alumno.nombres.toLowerCase().includes(this.filtroNombre.toLowerCase()) : true;
      const matchGrado = this.filtroGrado ? matricula.grado.nombre === this.filtroGrado : true;
      const matchSeccion = this.filtroSeccion ? matricula.seccion._id === this.filtroSeccion : true;
      const matchClase = this.filtroClase ? matricula.clase._id === this.filtroClase : true;
      return matchNombre && matchGrado && matchSeccion && matchClase;
    });
  }

  iniciarEdicion(matricula: any): void {
    this.alumnoSeleccionado = { ...matricula }; 
  }

  cancelarEdicion(): void {
    this.alumnoSeleccionado = null; 
  }

  actualizarAlumno(matricula: any): void {
    const index = this.matriculas.findIndex(m => m.alumno.dni === matricula.dni);
    if (index !== -1) {
      this.matriculas[index] = matricula;
      this.matriculasFiltradas[index] = matricula;
    }
    this.cancelarEdicion();
  }

  eliminarAlumno(id: string): void {
    const confirmar = confirm('¿Estás seguro de que deseas eliminar esta matrícula?');
    if (confirmar) {
      this.matriculas = this.matriculas.filter(matricula => matricula._id !== id); // Filtra por el ID de matrícula
      this.filtrar(); // Refiltra para actualizar la vista
    }
  }
  
}

