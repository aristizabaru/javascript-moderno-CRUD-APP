# JavaScript Moderno: Guía para dominar el lenguaje (CRUD APP)

## Acerca de

Este es un repositorio personal para ejecución del proyecto del curso **JavaScript Moderno: Guía para dominar el lenguaje** de **Fernando Herrera** en la plataforma Udemy. Para acceder al curso completo puede hacer [clic aquí](https://www.udemy.com/course/javascript-fernando-herrera/)

El proyecto desarrollado a continuación es una implementación frontend de un datatable de usuarios donde se ejecutan operaciones asíncronas de **create, read, update y delete** para explorar conceptos fundamentales del lenguaje, arquitecturas limpias y separación de responsabilidades. Dentro de la configuración y desarrollo del proyecto se usa [Vite](https://vitejs.dev/) como bundler y se consulta un **API REST**local levantada con json server.

## Requerimientos

- Node 20.9.0 LTS
- Vite 5.0.8

## Instalación del proyecto

Para instalar el proyecto siga los siguientes pasos

Instalar módulos o dependencias

```
npm install
```

## Ejecución del proyecto

Para ejecutar el proyecto se deben seguir los siguientes pasos:

1. Para levantar el backend en local ejecute el siguiente comando

```
npm run server
```

2. Clonar el archivo `.env.template` a `.env`
3. Configurar variable de entorno según ruta base entregada por json-server (API REST)

```
VITE_BASE_URL=http://localhost:3001
```

4. Correr el proyecto usando alguno de los siguientes scripts según el entorno

Ejecutar entorno de desarrollo

```
npm run dev
```

Ejecutar entorno de producción

```
npm start
```
