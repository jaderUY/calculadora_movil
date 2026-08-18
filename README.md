# Calculadora Móvil - Ionic Angular Standalone

Aplicación móvil de calculadora científica y básica desarrollada con **Ionic**, **Angular (Standalone Components)** y **Capacitor**, diseñada para ofrecer una interfaz moderna, fluida y adaptable tanto para entornos web como para dispositivos móviles (Android).

---

## Características Principales

* **Operaciones Básicas:** Adición (`+`), Reducción/Resta (`-`), Multiplicación (`×`) y División (`÷`).
* **Operaciones Avanzadas:** 
  * Exponenciación ($x^y$).
  * Raíz cuadrada ($\sqrt{x}$).
  * Funciones trigonométricas: Seno ($\sin$), Coseno ($\cos$) y Tangente ($\tan$).
* **Utilidades de Pantalla:**
  * Soporte para punto decimal (`.`).
  * Botón de borrado individual (`DEL`).
  * Reseteo total del display (`AC`).
* **Arquitectura Moderna:** Implementada 100% con componentes independientes (*Standalone Components*) de Angular, sin la necesidad de módulos tradicionales (`AppModule`).

---

## Tecnologías Utilizadas

* [Ionic Framework](https://ionicframework.com/) (v7+)
* [Angular](https://angular.dev/) (Standalone Architecture)
* [Capacitor](https://capacitorjs.com/) (Para despliegue nativo en Android)
* TypeScript / SCSS

---

## Guía de Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno de desarrollo:

### 1. Clonar el repositorio
```bash
git clone https://github.com/jaderUY/calculadora_movil.git
cd calculadora_movil
2. Instalar dependencias
bash
npm install
3. Ejecutar en modo desarrollo (Navegador)
bash
ionic serve
La aplicación se abrirá automáticamente en tu navegador predeterminado en http://localhost:8100/.

Generar el APK para Android (Windows / Linux)
Para compilar e instalar la aplicación en un dispositivo Android utilizando Capacitor, sigue los pasos a continuación:

Construir el proyecto para producción:

bash
ionic build
Añadir la plataforma Android (si aún no está configurada):

bash
npx cap add android
Sincronizar los cambios con Capacitor:

bash
npx cap sync android
Compilar el APK usando Gradle:

Entra a la carpeta de Android:

bash
cd android
Genera el APK de depuración (Debug) o producción (Release):

En Windows:

bash
gradlew.bat assembleDebug
En Linux / macOS:

bash
./gradlew assembleDebug
El archivo APK resultante se encontrará en la siguiente ruta de tu proyecto:
android/app/build/outputs/apk/debug/app-debug.apk

👨‍💻 Autor
Jader - jaderUY