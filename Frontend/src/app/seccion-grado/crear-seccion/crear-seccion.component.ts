import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeccionService } from '../../services/seccion';
import { Seccion } from '../../models/seccion.module';


@Component({
  selector: 'app-crear-seccion',
  templateUrl: './crear-seccion.component.html',
  styleUrl: './crear-seccion.component.css'
})
export class CrearSeccionComponent {

  seccionForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private _seccionService: SeccionService,
    private router: Router
  ) {
    this.seccionForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.seccionForm.valid) {
      this.agregarSeccion();
    }
  }

  private agregarSeccion(): void {
    const nombre = this.seccionForm.get('nombre')?.value.toUpperCase();

    const SECCION: Seccion = {
      nombre: nombre,
      _id: '',
    };

    this._seccionService.createSeccion(SECCION).subscribe({
      next: (data) => {
        this.mensaje = 'Sección creada con éxito';
        setTimeout(() => this.router.navigate(['/listGrados']), 2000);
      },
      error: (error) => {
       
        if (error.status === 400 && error.error?.message) {
          this.mensaje = error.error.message;  
        } else {
          this.mensaje = 'Error al crear la sección';
        }
        console.log(error);
      }
    });
  }
}
