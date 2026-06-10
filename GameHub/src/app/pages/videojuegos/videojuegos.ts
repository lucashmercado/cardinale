import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { VideojuegosService } from '../../services/videojuegos';
import { Videojuego } from '../../models/videojuego.model';

/**
 * VideojuegosComponent
 * --------------------
 * Página que muestra el catálogo completo de videojuegos.
 *
 * Responsabilidades:
 *  - Inyectar VideojuegosService para obtener los datos.
 *  - Exponer la lista al template para ser iterada con @for.
 *  - Proveer el getter totalDisponibles para la barra de estadísticas.
 *
 * Pipes utilizados en el template:
 *  - CurrencyPipe  → precio en pesos argentinos (ARS)
 *  - TitleCasePipe → género con formato de título
 */
@Component({
  selector: 'app-videojuegos',
  standalone: true,
  // Pipes declarados como dependencias del componente standalone
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './videojuegos.html',
  styleUrl: './videojuegos.css',
})
export class VideojuegosComponent implements OnInit {

  /** Inyección del servicio usando la función inject() (Angular 14+) */
  private videojuegosService = inject(VideojuegosService);

  /** Lista de videojuegos expuesta al template */
  videojuegos: Videojuego[] = [];

  /**
   * Getter calculado: cantidad de juegos con disponible === true.
   * Se usa en la barra de estadísticas mediante interpolación.
   */
  get totalDisponibles(): number {
    return this.videojuegos.filter(j => j.disponible).length;
  }

  /**
   * Se ejecuta al inicializar el componente.
   * Carga la lista de videojuegos desde el servicio.
   */
  ngOnInit(): void {
    this.videojuegos = this.videojuegosService.obtenerVideojuegos();
  }
}
