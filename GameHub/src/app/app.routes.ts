import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos';

/**
 * Configuración de rutas de la aplicación.
 *
 * Rutas definidas:
 *  ''             → redirige a /home (ruta por defecto)
 *  /home          → HomeComponent        (página principal)
 *  /videojuegos   → VideojuegosComponent (catálogo de juegos)
 *  **             → redirige a /home     (rutas no encontradas)
 */
export const routes: Routes = [
  // Ruta raíz: redirige automáticamente a /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Página principal con bienvenida y descripción del sistema
  { path: 'home', component: HomeComponent },

  // Página de listado de videojuegos con cards
  { path: 'videojuegos', component: VideojuegosComponent },

  // Wildcard: cualquier ruta desconocida vuelve al home
  { path: '**', redirectTo: 'home' }
];
