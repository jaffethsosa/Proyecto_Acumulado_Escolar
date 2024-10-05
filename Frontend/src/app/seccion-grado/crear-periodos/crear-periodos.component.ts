import { Component } from '@angular/core';
import { Periodo } from '../../models/periodo.module';
import { PeriodoService } from '../../services/periodo';

@Component({
  selector: 'app-crear-periodos',
  templateUrl: './crear-periodos.component.html',
  styleUrl: './crear-periodos.component.css'
})
export class CrearPeriodosComponent {
  
  nuevoPeriodo: Periodo = {
    anioInicio: '2024', 
    anioFin: '2025',    
    descripcion: ''
  };

  constructor(private periodoService: PeriodoService) {}

  crearPeriodo(): void {
    // Validaciones básicas para el formulario
    if (!this.nuevoPeriodo.anioInicio || !this.nuevoPeriodo.anioFin) {
      alert('Ambos años, inicio y fin, son requeridos.');
      return;
    }

    if (this.nuevoPeriodo.anioFin < this.nuevoPeriodo.anioInicio) {
      alert('El año de fin no puede ser menor que el año de inicio.');
      return;
    }

    // Llamada al servicio para crear el periodo
    this.periodoService.crearPeriodo(this.nuevoPeriodo).subscribe(
      (response) => {
        console.log('Periodo creado exitosamente:', response);
        alert('Periodo creado exitosamente');
        // Resetear el formulario
        this.nuevoPeriodo = { anioInicio: '', anioFin: '', descripcion: '' };
      },
      (error) => {
        console.error('Error al crear el periodo:', error);
        alert('Hubo un error al crear el periodo.');
      }
    );
  }
}