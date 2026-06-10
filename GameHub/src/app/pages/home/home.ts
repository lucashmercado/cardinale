import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * HomeComponent
 * -------------
 * Página principal (landing page) de la aplicación GameHub.
 *
 * Contiene:
 *  - Sección hero con bienvenida, descripción y CTA hacia /videojuegos.
 *  - Tarjetas informativas sobre las funcionalidades del sistema.
 *
 * Usa RouterLink para la navegación declarativa hacia otras rutas.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}
