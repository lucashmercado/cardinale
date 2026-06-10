import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

/**
 * App (componente raíz)
 * ---------------------
 * Punto de entrada visual de la aplicación.
 * Compone el layout principal:
 *  - <app-navbar>    → barra de navegación persistente
 *  - <router-outlet> → área de contenido donde se renderizan las páginas
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'GameHub';
}
