import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
 *  - Proveer el enrutador y leer los parámetros de consulta para realizar filtrado interactivo.
 *  - Proveer el getter totalDisponibles para la barra de estadísticas.
 */
@Component({
  selector: 'app-videojuegos',
  standalone: true,
  // Pipes y módulos necesarios del componente standalone
  imports: [CurrencyPipe, TitleCasePipe, FormsModule],
  templateUrl: './videojuegos.html',
  styleUrl: './videojuegos.css',
})
export class VideojuegosComponent implements OnInit {

  /** Inyección del servicio usando la función inject() (Angular 14+) */
  private videojuegosService = inject(VideojuegosService);

  /** Inyección de la ruta activa para capturar filtros desde el inicio */
  private route = inject(ActivatedRoute);

  /** Lista completa original de videojuegos */
  todosLosVideojuegos: Videojuego[] = [];

  /** Lista filtrada expuesta al template */
  videojuegos: Videojuego[] = [];

  // Modelos de enlace bidireccional (ngModel)
  buscarTexto: string = '';
  generoSeleccionado: string = '';
  plataformaSeleccionada: string = '';
  ordenSeleccionado: string = 'destacados';

  // Listas generadas dinámicamente para los filtros select
  generos: string[] = [];
  plataformas: string[] = [];

  /**
   * Getter calculado: cantidad de juegos con disponible === true en la lista actual.
   */
  get totalDisponibles(): number {
    return this.videojuegos.filter(j => j.disponible).length;
  }

  /**
   * Inicialización del componente.
   */
  ngOnInit(): void {
    // 1. Obtener catálogo original completo
    this.todosLosVideojuegos = this.videojuegosService.obtenerVideojuegos();

    // 2. Extraer dinámicamente géneros y plataformas únicas
    this.generos = Array.from(new Set(this.todosLosVideojuegos.map(j => j.genero)));
    this.plataformas = Array.from(new Set(this.todosLosVideojuegos.map(j => j.plataforma)));

    // 3. Suscribirse a cambios en los parámetros de consulta (query parameters)
    this.route.queryParams.subscribe(params => {
      // Limpiar filtros antes de procesar nuevos parámetros
      this.limpiarFiltros(false);

      if (params['sort'] === 'top') {
        // "Top valorados" -> Ordenamos por mayor precio y filtramos disponibles
        this.ordenSeleccionado = 'precio-desc';
        this.plataformaSeleccionada = '';
        this.generoSeleccionado = '';
      } else if (params['genero']) {
        this.generoSeleccionado = params['genero'];
      } else if (params['filter'] === 'generos') {
        // Si viene con filter=generos, mostramos todos pero enfocaremos la selección de géneros
        this.generoSeleccionado = '';
      }

      this.aplicarFiltros();
    });
  }

  /**
   * Aplica todos los criterios de filtro y ordenación sobre la lista original.
   */
  aplicarFiltros(): void {
    let filtrados = [...this.todosLosVideojuegos];

    // 1. Filtrar por búsqueda de texto (case insensitive)
    if (this.buscarTexto.trim() !== '') {
      const query = this.buscarTexto.toLowerCase();
      filtrados = filtrados.filter(juego =>
        juego.titulo.toLowerCase().includes(query) ||
        juego.genero.toLowerCase().includes(query) ||
        juego.plataforma.toLowerCase().includes(query)
      );
    }

    // 2. Filtrar por género seleccionado
    if (this.generoSeleccionado !== '') {
      filtrados = filtrados.filter(juego => juego.genero === this.generoSeleccionado);
    }

    // 3. Filtrar por plataforma seleccionada
    if (this.plataformaSeleccionada !== '') {
      filtrados = filtrados.filter(juego => juego.plataforma === this.plataformaSeleccionada);
    }

    // 4. Aplicar ordenamiento
    if (this.ordenSeleccionado === 'precio-asc') {
      filtrados.sort((a, b) => a.precio - b.precio);
    } else if (this.ordenSeleccionado === 'precio-desc') {
      filtrados.sort((a, b) => b.precio - a.precio);
    } else if (this.ordenSeleccionado === 'disponible') {
      // Primero los que están disponibles (disponible: true)
      filtrados.sort((a, b) => (a.disponible === b.disponible ? 0 : a.disponible ? -1 : 1));
    }

    this.videojuegos = filtrados;
  }

  /**
   * Restablece los filtros a su estado inicial.
   * @param recargar boolean - si es true ejecuta el filtro inmediatamente
   */
  limpiarFiltros(recargar: boolean = true): void {
    this.buscarTexto = '';
    this.generoSeleccionado = '';
    this.plataformaSeleccionada = '';
    this.ordenSeleccionado = 'destacados';
    if (recargar) {
      this.aplicarFiltros();
    }
  }
}

