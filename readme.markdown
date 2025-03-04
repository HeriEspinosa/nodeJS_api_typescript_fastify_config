# Proyecto Básico de Node.js con TypeScript

Este proyecto tiene el objetivo de enseñar a configurar un entorno de desarrollo utilizando **Node.js** con **TypeScript**. Es un punto de partida sencillo para quienes deseen aprender cómo trabajar con estas tecnologías y realizar un despliegue básico de un servidor HTTP.

## Características

- **fastify** como framework de servidor.
- Configuración de **TypeScript** para entornos de desarrollo.
- Uso de **tsx** y **--wath** para facilitar el desarrollo.
- **Estructura básica** para manejar peticiones HTTP.
- Respuesta básica: `{ response: 'Hello Team' }`.

## Requisitos

- Node.js v18 o superior.
- npm (normalmente viene junto con Node.js).

## Instalación

Sigue los siguientes pasos para clonar el repositorio y configurar el entorno de desarrollo:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/mi-app-node-ts.git
    cd app-node-ts
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

## Scripts Disponibles

En este proyecto puedes utilizar los siguientes comandos:

- `npm run dev`: Ejecuta el servidor en modo de desarrollo utilizando **tsx** y **--watch**, lo que permite recargar automáticamente cuando hay cambios en el código.
- `npm run build`: Compila el proyecto TypeScript a JavaScript en el directorio `build`.
- `npm start`: Ejecuta la aplicación compilada desde el directorio `build`.

## Configuración del Proyecto

El proyecto está configurado para que el código TypeScript se encuentre dentro de la carpeta `src`, y el código compilado en JavaScript se genere en la carpeta `build`. La configuración de TypeScript está contenida en el archivo `tsconfig.json`, con las siguientes configuraciones clave:

- **rootDir**: `src` (directorio de código fuente).
- **outDir**: `./build` (directorio de salida del código compilado).
- **module**: `Node16` (para compatibilidad con Node.js).
- **moduleResolution**: `node16` (Especifica cómo TypeScript busca un archivo desde un especificador de módulo determinado.).
- **target**: `es2022` (versión de ECMAScript que se usará para la salida).


Si estas configurando un proyecto desde cero, debes inicializar el tsconfig.json con el comando `npx tsc --init`.

## Ejemplo de Uso

Una vez que el servidor esté en ejecución, puedes acceder a la URL base y ver una respuesta con "{ response: 'Hello Team' }":

## Tecnologías Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [fastify](https://fastify.dev/)
- [tsx](https://tsx.is/)

## Contribución

Este es un proyecto básico con fines educativos. Si deseas mejorarlo o agregar nuevas funcionalidades, siéntete libre de hacer un fork y abrir un Pull Request.

---

**Autor**: Ing. Heri Espinosa

¡Gracias por echarle un vistazo a este proyecto!