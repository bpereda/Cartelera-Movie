# Cartelera Movie

Aplicación móvil desarrollada con React Native y Expo para consultar la cartelera de cines en Uruguay.

## Acerca del Proyecto

Esta aplicación fue creada como tarea en el marco de la materia **Aplicaciones para Dispositivos Móviles**. Permite a los usuarios consultar películas en cartelera, ver horarios por complejo cinematográfico y acceder a detalles completos de cada película.

## Características

- **Lista de películas en cartelera**: Visualización de todas las películas disponibles con sus pósters
- **Filtro por complejo**: Selector para filtrar películas según el complejo cinematográfico
- **Detalles de películas**: Información completa incluyendo:
  - Póster de la película
  - Descripción
  - Horarios por complejo y sala
  - Formato y idioma de cada función
  - Tráiler (cuando esté disponible)
- **Navegación intuitiva**: Interfaz simple y fácil de usar

## API Utilizada

La aplicación consume datos de la **Movie API de Uruguay**:
- **Endpoint**: `https://api.movie.com.uy/api/shows/rss/data`
- Proporciona información actualizada sobre películas en cartelera, horarios y complejos cinematográficos

## Tecnologías

- **React Native** (0.79.1)
- **Expo** (~53.0.4)
- **React Navigation**: Navegación entre pantallas
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
- **React Native WebView**: Reproducción de tráilers
- **React Native Picker**: Selector de complejos cinematográficos

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI
- Expo Go app en tu dispositivo móvil (opcional, para pruebas en dispositivo físico)

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd Cartelera-Movie
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar la aplicación:
```bash
npm start
```

## Ejecución

### En dispositivo físico:
```bash
npm start
```
Escanea el código QR con la app Expo Go

### En emulador Android:
```bash
npm run android
```

### En simulador iOS:
```bash
npm run ios
```

### En navegador web:
```bash
npm run web
```

## 📂 Estructura del Proyecto

```
Cartelera-Movie/
├── app/
│   ├── App.jsx           # Configuración de navegación principal
│   ├── HomeScreen.jsx    # Pantalla principal con lista de películas
│   ├── DetailScreen.jsx  # Pantalla de detalles de película
│   └── index.jsx         # Punto de entrada de la aplicación
├── assets/               # Recursos estáticos
├── app.json             # Configuración de Expo
├── package.json         # Dependencias del proyecto
└── README.md           # Este archivo

```

## Funcionalidades Principales

### HomeScreen
- Carga de películas desde la API
- Filtrado por complejo cinematográfico mediante Picker
- Lista de películas con póster y título
- Navegación a pantalla de detalles al seleccionar una película

### DetailScreen
- Visualización del póster en tamaño completo
- Descripción de la película
- Lista de todos los complejos donde se exhibe la película
- Horarios detallados por complejo y sala
- Información de formato (2D/3D) e idioma
- Reproducción de tráiler mediante WebView

## Información Académica

**Materia**: Aplicaciones para Dispositivos Móviles  
**Tipo**: Trabajo Práctico  
**Año**: 2025

## Licencia

Este proyecto fue desarrollado con fines educativos.

