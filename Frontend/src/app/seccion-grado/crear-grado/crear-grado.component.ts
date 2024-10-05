import { Grado } from '../../models/grado.module';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GradoService } from '../../services/grado';

@Component({
  selector: 'app-crear-grado',
  templateUrl: './crear-grado.component.html',
  styleUrls: ['./crear-grado.component.css']
})
export class CrearGradoComponent {

  gradoForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private _gradoService: GradoService,
    private router: Router
  ) {
    this.gradoForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.gradoForm.valid) {
      this.agregarGrado();
    }
  }

  private agregarGrado(): void {
    const nombre = this.gradoForm.get('nombre')?.value;

    
    const GRADO: Grado = {
      nombre: nombre,
      _id: '', 
    };

    this._gradoService.crearGrado(GRADO).subscribe(data => {
      this.mensaje = 'Grado creado con éxito';
      setTimeout(() => this.router.navigate(['/listGrados']), 2000);
    }, error => {
      this.mensaje = 'Error al crear el grado';
      console.log(error);
    });
  }
}
