import { ApplicationConfig, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

import { routes } from './app.routes';

/**
 * Registro del locale de Argentina (es-AR).
 * Necesario para que el CurrencyPipe formatee correctamente
 * los valores monetarios en pesos argentinos (ARS).
 */
registerLocaleData(localeEsAr);

/**
 * Configuración global de la aplicación Angular.
 *
 * Providers registrados:
 *  - provideBrowserGlobalErrorListeners → captura errores globales del navegador
 *  - provideRouter(routes)              → habilita el sistema de enrutamiento SPA
 *  - LOCALE_ID: 'es-AR'                → define el locale para pipes de fecha/moneda
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Establece el idioma/región por defecto para CurrencyPipe, DatePipe, etc.
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ]
};
