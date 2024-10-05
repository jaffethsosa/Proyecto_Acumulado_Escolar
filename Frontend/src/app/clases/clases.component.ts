import { Component, OnInit } from '@angular/core';
import { Clase } from '../models/clase.module';
import { ClaseService } from '../services/clase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent implements OnInit {

  listClases: Clase[] = [];

  constructor(private _claseService: ClaseService) {}

  ngOnInit(): void {
  //  this.getClase();
  }

  /*getClase(): Observable<Clase[]> {
    this._claseService.getClase().subscribe(data => {
      this.listClases = data;  
    });
}*/

}
