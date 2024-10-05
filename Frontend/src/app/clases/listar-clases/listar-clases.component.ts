import { Component, OnInit } from '@angular/core';
import { Clase } from '../../models/clase.module';
import { ClaseService } from '../../services/clase';

@Component({
  selector: 'app-listar-clases',
  templateUrl: './listar-clases.component.html',
  styleUrls: ['./listar-clases.component.css']
})
export class ListarClasesComponent implements OnInit {

  listClases: Clase[] = [];

  constructor(private _claseService: ClaseService) {}

  ngOnInit(): void {
    this.obtenerClase();
  }

  obtenerClase(): void {
    this._claseService.getClase().subscribe(data => {
        if (Array.isArray(data)) {
          this.listClases = data.map(clase => ({
            ...clase,
            grado: clase.grado || { nombre: 'Desconocido' },
            seccion: clase.seccion || { nombre: 'Desconocido' },
            periodo: clase.periodo || { nombre: 'Desconocido', anioInicio: 'Desconocido' } // Ahora tendrá la información del periodo
          }));
          
        } else {
            console.error('Error: Se esperaba un array de clases', data);
        }
    }, error => {
        console.error('Error al obtener las clases', error);
    });
}

  

  iniciarEdicion(clase: Clase): void {
    clase.editing = true;
  }

  cancelarEdicion(clase: Clase): void {
    clase.editing = false;
    this.obtenerClase(); // Re-fetch classes to discard unsaved changes
  }

  actualizarClase(clase: Clase): void {
    if (clase._id) {
      this._claseService.actualizarClase(clase._id, clase).subscribe(() => {
        clase.editing = false;
        this.obtenerClase(); // Refresh the list
      }, error => {
        console.error('Error al actualizar la clase', error);
      });
    } else {
      console.error('Error: El _id de la clase no está definido');
    }
  }

  eliminarClase(id?: string): void {
    if (id) {
      const confirmar = confirm('¿Estás seguro de que deseas eliminar esta clase?');
      if (confirmar) {
        this._claseService.eliminarClase(id).subscribe(() => {
          this.listClases = this.listClases.filter(clase => clase._id !== id);
        }, error => {
          console.error('Error al eliminar la clase', error);
        });
      }
    } else {
      console.error('Error: ID de la clase no está definido');
    }
  }
}
