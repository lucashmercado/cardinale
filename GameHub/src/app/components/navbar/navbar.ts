import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * NavbarComponent
 * ---------------
 * Barra de navegación global de la aplicación.
 * Se renderiza en el layout raíz (app.html) y permanece
 * visible en todas las páginas gracias al RouterOutlet.
 *
 * Utiliza:
 *  - RouterLink       → navegación declarativa (sin recarga de página)
 *  - RouterLinkActive → aplica la clase CSS 'active' al enlace de la ruta actual
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  /**
   * Controla si el menú colapsable de navegación está cerrado en pantallas móviles.
   */
  isMenuCollapsed = true;
}
