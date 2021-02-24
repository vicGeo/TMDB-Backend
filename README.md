# CRUD Geekshubs

API REST que simula videoclub de peliculas.

Base de datos en la nube [MongoDB Atlas](https://www.mongodb.com/es/cloud/atlas)

Deploy con [heroku](https:www.heroku.com) 'https://geekshubs-api.herokuapp.com/'.

## Open endpoints

No necesitan autentificación.

* users: `GET /users/`
* movies: `GET /movies/`
* orders: `GET /orders/`


* Peticiones creadas para probar con POSTMAN
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/aa01556a71686bb53b3f)

# REST API

## Lista de usuarios

### Request

`GET /users/`

    https://geekshubs-api.herokuapp.com/users


## Añadir usuario

### Request

`POST /users/`

    https://geekshubs-api.herokuapp.com/users



## Listar usuario por ID

### Request

`GET /users/:id`

    https://geekshubs-api.herokuapp.com/users/60368f363cceee001534b785


## Actualizar usuario por ID

### Request

`PUT /users/:id`

    https://geekshubs-api.herokuapp.com/users/6035175e7c3530423c723eb1


## Eliminar usuario por ID

### Request

`DELETE /users/:id`

    https://geekshubs-api.herokuapp.com/users/60367eac5f61e821b8e9ad30


## Listar peliculas

### Request

`GET /movies/`

    https://geekshubs-api.herokuapp.com/movies


## Añadir peliculas

### Request

`POST /movies`

    https://geekshubs-api.herokuapp.com/movies/


## Listar pelicula por ID

### Request

`GET /movies/:id`

    https://geekshubs-api.herokuapp.com/movies/60353f3ee690533d94d53c71


## Actualizar pelicula por ID

### Request

`PUT /movies/:id`

    https://geekshubs-api.herokuapp.com/movies/603698e03cceee001534b787


## Eliminar pelicula por ID

### Request

`DELETE /movies/:id`

    https://geekshubs-api.herokuapp.com/movies/603698e03cceee001534b787


## Buscar pelicula por titulo

### Request

`GET /movies/search`

    https://geekshubs-api.herokuapp.com/movies/search/

## Listar todos los pedidos realizados

### Request

`GET /orders/`

    https://geekshubs-api.herokuapp.com/orders

## Crear pedidos

### Request

`POST /orders/`

    https://geekshubs-api.herokuapp.com/orders


## Eliminar pedidos por su ID

### Request

`DELETE /orders/:id`

    https://geekshubs-api.herokuapp.com/orders/60369cd33cceee001534b78c


