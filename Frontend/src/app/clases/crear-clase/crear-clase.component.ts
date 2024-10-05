import { PeriodoService } from './../../services/periodo';
import { SeccionService } from './../../services/seccion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaseService } from '../../services/clase';
import { Seccion } from '../../models/seccion.module';
import { Grado } from '../../models/grado.module';
import { GradoService } from '../../services/grado';
import { Periodo } from '../../models/periodo.module';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrl: './crear-clase.component.css'
})
export class CrearClaseComponent {

  claseForm: FormGroup;
  secciones: Seccion[] = [];
  grados: Grado[] = [];
  periodos: Periodo[] = [];
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private claseService: ClaseService,
    private seccionService: SeccionService,
    private gradoService: GradoService,
    private periodoService: PeriodoService,
    private router: Router
  ) {
    this.claseForm = this.fb.group({
      nombre: ['', Validators.required],
      seccion: ['', Validators.required],
      grado: ['', Validators.required],
      periodo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarSecciones();
    this.cargarGrados();
    this.cargarPeriodos();
  }

  cargarSecciones(): void {
    this.seccionService.getSecciones().subscribe({
      next: (data) => {
        this.secciones = data;
      },
      error: (err) => console.error(err)
    });
  }

  cargarGrados(): void {
    this.gradoService.getGrados().subscribe({
      next: (data) => {
        this.grados = data;
      },
      error: (err) => console.error(err)
    });
  }

  cargarPeriodos(): void {
    this.periodoService.getPeriodos().subscribe({
      next: (data) => {
        this.periodos = data;
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (this.claseForm.valid) {
      this.claseService.guardarClase(this.claseForm.value).subscribe({
        next: () => {
          this.mensaje = 'Clase creada con éxito';
          setTimeout(() => this.router.navigate(['/clases']), 2000);
        },
        error: (err) => {
          console.error('Error al crear clase', err);
          this.mensaje = 'Error al crear la clase';
        }
      });
    } else {
      this.mensaje = 'Por favor completa el formulario correctamente';
    }
  }
}