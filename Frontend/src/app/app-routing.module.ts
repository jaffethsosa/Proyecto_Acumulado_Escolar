import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './alumnos/page1.component';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './clases/clases.component';
import { ListarAlumnosComponent } from './alumnos/listar-alumnos/listar-alumnos.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';
import { CrearClaseComponent } from './clases/crear-clase/crear-clase.component';
import { CrearGradoComponent } from './seccion-grado/crear-grado/crear-grado.component';
import { CrearSeccionComponent } from './seccion-grado/crear-seccion/crear-seccion.component';
import { ListarClasesComponent } from './clases/listar-clases/listar-clases.component';
import { CrearPeriodosComponent } from './seccion-grado/crear-periodos/crear-periodos.component';
import { SeccionGradoComponent } from './seccion-grado/seccion-grado.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { ListadoNotasComponent } from './clases/listado-notas/listado-notas.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'alumnos', component: Page1Component},
  {path: 'clases', component: ClasesComponent},
  {path: 'seccion-grado', component: SeccionGradoComponent},
  {path: 'notas', component: ListadoNotasComponent},
  {path: 'listAlumnos', component: ListarAlumnosComponent},
  {path: 'crearAlumnos', component: CrearAlumnoComponent},
  {path: 'listClases', component: ListarClasesComponent},
  {path: 'crearClase', component: CrearClaseComponent},
  {path: 'crearGrado', component: CrearGradoComponent},
  {path: 'crearSeccion', component: CrearSeccionComponent},
  {path: 'crearPeriodo', component: CrearPeriodosComponent},
  {path: 'matricula', component: MatriculasComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
