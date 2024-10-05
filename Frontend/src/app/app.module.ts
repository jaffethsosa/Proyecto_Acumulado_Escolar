import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlumnosComponent } from './alumnos/listar-alumnos/listar-alumnos.component';
import { Page1Component } from './alumnos/page1.component';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './clases/clases.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';
import { CrearClaseComponent } from './clases/crear-clase/crear-clase.component';
import { ListarClasesComponent } from './clases/listar-clases/listar-clases.component';
import { CrearSeccionComponent } from './seccion-grado/crear-seccion/crear-seccion.component';
import { CrearGradoComponent } from './seccion-grado/crear-grado/crear-grado.component';
import { CrearPeriodosComponent } from './seccion-grado/crear-periodos/crear-periodos.component';
import { SeccionGradoComponent } from './seccion-grado/seccion-grado.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { ListadoNotasComponent } from './clases/listado-notas/listado-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnosComponent,
    Page1Component,
    HomeComponent,
    ClasesComponent,
    CrearAlumnoComponent,
    CrearClaseComponent,
    ListarClasesComponent,
    CrearSeccionComponent,
    CrearGradoComponent,
    CrearPeriodosComponent,
    SeccionGradoComponent,
    MatriculasComponent,
    ListadoNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
