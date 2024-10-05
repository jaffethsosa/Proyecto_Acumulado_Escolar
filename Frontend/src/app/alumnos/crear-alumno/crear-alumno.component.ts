import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from '../../services/alumnos';
import { Alumno } from '../../models/alumno.module';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css'
})
export class CrearAlumnoComponent implements OnInit {

  alumnoForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private _alumnoService: AlumnoService) {
    this.alumnoForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      fechaNac: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  agregarAlumno() {
    const nombres = this.alumnoForm.get('nombres')?.value;
    const apellidos = this.alumnoForm.get('apellidos')?.value;
    const dni = this.alumnoForm.get('dni')?.value;
    const fechaNAc = this.alumnoForm.get('fechaNac')?.value;
    const direccion = this.alumnoForm.get('direccion')?.value.toUpperCase();
    const telefono = this.alumnoForm.get('telefono')?.value;
    const email = this.alumnoForm.get('email')?.value;
    // Verificar si el nombre ya está en uso
    this._alumnoService.verificarNombre(nombres + apellidos).subscribe(existe => {
      if (existe.existe) {
        this.mensaje = 'El nombre ya está en uso. Por favor, ingrese otro.';
        return;
      }
        
      // Crear el nuevo alumno
      const ALUMNO: Alumno = {
        nombres: nombres,
        apellidos: apellidos,
        dni: dni,
        fechaNac: fechaNAc,
        direccion: direccion,
        telefono: telefono,
        email: email,
        _id: '', 
      };
  
      this._alumnoService.guardarAlumno(ALUMNO).subscribe(data => {
        this.mensaje = 'Usuario creado con éxito';
        setTimeout(() => this.router.navigate(['/listAlumnos']), 2000);
      }, error => {
        this.mensaje = 'Error al crear el usuario';
        console.log(error);
      });
    });
}
}