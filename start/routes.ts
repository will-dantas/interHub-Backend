/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route';

//Routes Users
Route.post("/users", "UsersController.create");
Route.get("/users", "UsersController.index");
//Routes Authentication 
Route.get('login', 'AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')          
Route.get('logout', 'AuthController.logout').as('auth.logout') 
Route.get('/', "AuthController.session");
//Routes Ordem de Servico
Route.get("service_orders", 'ServiceOrdersController.servicesShow')
Route.post("service_orders", "ServiceOrdersController.create").as('register.services')
