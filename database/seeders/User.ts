import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'


export default class UserSeeder extends BaseSeeder {

  public async run () {
    await User.createMany([
      {
        name: 'Admin',
        email: 'coordenador@gmail.com.br',
        password: '123456', 
        occupation: 'Coordenador'
      }
    ])
  }

}
