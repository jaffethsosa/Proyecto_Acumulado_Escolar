import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatriculaService } from './../services/matriculas';
import { AlumnoService } from './../services/alumnos';
import { SeccionService } from './../services/seccion';
import { GradoService } from './../services/grado';
import { PeriodoService } from './../services/periodo';
import { ClaseService } from './../services/clase';
import { Alumno } from './../models/alumno.module';
import { Seccion } from './../models/seccion.module';
import { Grado } from './../models/grado.module';
import { Periodo } from './../models/periodo.module';
import { Clase } from './../models/clase.module';
import { CrearMatricula } from '../models/crearMatricula.module';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent  {
  
  matriculaForm: FormGroup;
  alumnos: Alumno[] = [];
  clases: any[] = [];
  grados: any[] = [];
  secciones: any[] = [];
  periodos: any[] = [];

  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private matriculaService: MatriculaService,
    private alumnoService: AlumnoService,
    private seccionService: SeccionService,
    private gradoService: GradoService,
    private periodoService: PeriodoService,
    private claseService: ClaseService,
    private router: Router
  ) {
    this.matriculaForm = this.fb.group({
      alumno: ['', Validators.required],
      clase: ['', Validators.required],
      periodo: ['', Validators.required],
      grado: ['', Validators.required],
      seccion: ['', Validators.required],
      estado: ['activa']
    });
  }

  ngOnInit(): void {
    this.cargarAlumnos();
    this.cargarClases();
    this.cargarPeriodos();
  }

  cargarAlumnos(): void {
    this.alumnoService.getAlumno().subscribe({
      next: (data) => {
        this.alumnos = Array.isArray(data) ? data : [];
      },
      error: (err) => console.error('Error al cargar alumnos', err)
    });
  }

  cargarPeriodos(): void {
    this.periodoService.getPeriodos().subscribe({
      next: (data) => {
        this.periodos = Array.isArray(data) ? data : [];
        
      },
      error: (err) => console.error('Error al cargar periodos', err)
    });
  }

  cargarClases(): void {
    this.claseService.getClase().subscribe({
      next: (data) => {
        this.clases = data;
        
      },
      error: (err) => console.error('Error al cargar clases', err)
    });
  }
  

  /* onGradoChange(): void {
    const gradoId = this.matriculaForm.get('grados')?.value;
    
    this.matriculaForm.patchValue({
      grados: gradoId
    });
  }

  onSeccionChange(): void {
    const seccionId = this.matriculaForm.get('secciones')?.value;
    
    this.matriculaForm.patchValue({
      secciones: seccionId
    });
  } */

  onClaseChange(): void {
    const claseId = this.matriculaForm.get('clase')?.value;
    const selectedClase = this.clases.find(clase => clase._id === claseId);
    
    if (selectedClase) {
    /*  this.matriculaForm.patchValue({
      grados: selectedClase.grado?._id || '',
      secciones: selectedClase.seccion?._id || '',
      periodo: selectedClase.periodo || ''
    }); */

      this.grados = [selectedClase.grado];
      this.secciones = [selectedClase.seccion];
      const periodoId = selectedClase.periodo; 
      const periodo = this.periodos.find(p => p._id === periodoId);

      this.matriculaForm.patchValue({
        periodo: periodo ? periodo._id : ''
      });

    } else {
      // Resetea los campos en caso de no haber clase seleccionada
      this.matriculaForm.get('grados')?.reset();
      this.matriculaForm.get('secciones')?.reset();
      this.matriculaForm.get('periodo')?.reset();
    }
  }

  onSubmit(): void {
    const nuevaMatricula: CrearMatricula = {
      alumno: this.matriculaForm.value.alumno,
      clase: this.matriculaForm.value.clase,
      periodo: this.matriculaForm.value.periodo,
      grado: this.matriculaForm.value.grado,
      seccion: this.matriculaForm.value.seccion,
      estado: this.matriculaForm.value.estado || 'activa'
    };
  
    // Solo una llamada al servicio
    this.matriculaService.crearMatricula(nuevaMatricula).subscribe({
      next: (response) => {
        this.mensaje = 'Matrícula creada exitosamente';
        setTimeout(() => this.router.navigate(['/home']), 2000);
      },
      error: (error) => {
        this.mensaje = 'Error al crear matrícula';
        console.error('Error al crear matrícula', error);
      }
    });
  }
  

  


}