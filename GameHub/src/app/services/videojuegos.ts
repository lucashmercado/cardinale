import { Injectable } from '@angular/core';
import { Videojuego } from '../models/videojuego.model';

/**
 * VideojuegosService
 * ------------------
 * Servicio inyectable a nivel raíz (providedIn: 'root').
 * Actúa como capa de datos del sistema: centraliza
 * la lista de videojuegos y expone métodos para consultarla.
 *
 * En una aplicación real esta información vendría de una API REST
 * mediante HttpClient; aquí se usan datos precargados (mock data).
 */
@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  /**
   * Lista privada de videojuegos precargados (mock data).
   * Contiene 10 títulos con distintos géneros y plataformas.
   */
  private videojuegos: Videojuego[] = [
    {
      id: 1,
      titulo: 'The Legend of Zelda: Breath of the Wild',
      genero: 'Aventura',
      plataforma: 'Nintendo Switch',
      precio: 59.99,
      disponible: true
    },
    {
      id: 2,
      titulo: 'God of War Ragnarök',
      genero: 'Acción',
      plataforma: 'PlayStation 5',
      precio: 69.99,
      disponible: true
    },
    {
      id: 3,
      titulo: 'Elden Ring',
      genero: 'RPG',
      plataforma: 'PC',
      precio: 59.99,
      disponible: true
    },
    {
      id: 4,
      titulo: 'Halo Infinite',
      genero: 'Shooter',
      plataforma: 'Xbox Series X',
      precio: 49.99,
      disponible: true
    },
    {
      id: 5,
      titulo: 'Cyberpunk 2077',
      genero: 'RPG',
      plataforma: 'PC',
      precio: 39.99,
      disponible: true
    },
    {
      id: 6,
      titulo: 'FIFA 25',
      genero: 'Deportes',
      plataforma: 'PlayStation 5',
      precio: 69.99,
      disponible: false
    },
    {
      id: 7,
      titulo: 'Minecraft',
      genero: 'Sandbox',
      plataforma: 'PC',
      precio: 26.95,
      disponible: true
    },
    {
      id: 8,
      titulo: 'Red Dead Redemption 2',
      genero: 'Acción',
      plataforma: 'PC',
      precio: 29.99,
      disponible: true
    },
    {
      id: 9,
      titulo: 'Starfield',
      genero: 'RPG',
      plataforma: 'Xbox Series X',
      precio: 69.99,
      disponible: false
    },
    {
      id: 10,
      titulo: 'Super Mario Odyssey',
      genero: 'Plataformas',
      plataforma: 'Nintendo Switch',
      precio: 49.99,
      disponible: true
    }
  ];

  /**
   * Retorna la lista completa de videojuegos.
   * @returns Videojuego[] - arreglo con todos los videojuegos del sistema
   */
  obtenerVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }
}
