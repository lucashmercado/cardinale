/**
 * Interfaz Videojuego
 * -------------------
 * Representa la entidad principal del sistema.
 * Define la estructura de datos que debe cumplir
 * cada objeto videojuego en la aplicación.
 */
export interface Videojuego {
  /** Identificador único del videojuego */
  id: number;

  /** Nombre/título del videojuego */
  titulo: string;

  /** Género del videojuego (Acción, RPG, Deportes, etc.) */
  genero: string;

  /** Plataforma en la que está disponible */
  plataforma: string;

  /** Precio en dólares (se mostrará convertido a ARS con CurrencyPipe) */
  precio: number;

  /** Indica si el videojuego está disponible para compra */
  disponible: boolean;
}
