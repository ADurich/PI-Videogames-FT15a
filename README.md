<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Videogames Api

<p align="right">
  <img height="200" src="./videogame.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.


## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `videogames`

El contenido de `client` fue creado usando: Create React App.

### _Conectar la base de datos_

 - Ir a tu database manager de Postgress y crear una nueva base de datos llamada 'videogames', este es el nombre de la base de datos a la que nos vamos a conectar

### _Instalar los paquetes necesarios para correrlo_

- Abrir la consola del proyecto
    + Dentro de la carpeta 'api', correr la línea de comandos y escribir 'npm install'
    + Dentro de la carpeta 'client', correr la línea de comandos y escribir 'npm install'

### _Correr el proyecto_

- Abrir la consola del proyecto
    + Dentro de la carpeta 'api', correr la línea de comandos y escribir 'npm start'     
    + Dentro de la carpeta 'client', correr la línea de comandos y escribir 'npm start' (va directamente a http://localhost:3000/)  

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
# Capturas

<img width="90%" src="https://github.com/ADurich/PI-Videogames-FT15a/blob/main/videogamesImages/videogameImage.png" alt="About screen" title="Landing"/>
<img width="90%" src="https://github.com/ADurich/PI-Videogames-FT15a/blob/main/videogamesImages/videogameImage2.png" alt="About screen" title="Landing"/>
<img width="90%" src="https://github.com/ADurich/PI-Videogames-FT15a/blob/main/videogamesImages/videogameImage3.png" alt="About screen" title="Landing"/>
<img width="90%" src="https://github.com/ADurich/PI-Videogames-FT15a/blob/main/videogamesImages/videogameImage4.png" alt="About screen" title="Landing"/>
