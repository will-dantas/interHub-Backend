import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const {name, email, password, occupation} = request.only(["name", "email", "password", "occupation"]);
    //console.log(data);

    const user = await User.create({
      name,
      email,
      password,
      occupation
    });

    return user;
  }

  public async index() {
    const all = await User.all();
    
    return all;
  }
}
