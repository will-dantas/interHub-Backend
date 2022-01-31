import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServiceOrder from 'App/Models/ServiceOrder';

export default class ServiceOrdersController {

  public async servicesShow({ view }: HttpContextContract) {
    return view.render('pages/service_orders')
  }

  public async create({ request }: HttpContextContract) {
    const { cliente, text, colaborador, coordinates } = request.only(["cliente", "text", "colaborador", "coordinates"]);
    //console.log(data);

    const user = await ServiceOrder.create({
      cliente, 
      text, 
      colaborador, 
      coordinates
    });

    return user;
  }

  public async index() {
    const all = await ServiceOrder.all();

    return all;
  }
}
