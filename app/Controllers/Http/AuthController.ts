import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

  public async loginShow({ view }: HttpContextContract) {
    return view.render('auth/login')
  }


  public async login({ request, response, auth, session }: HttpContextContract) {
    const { uid, password } = request.only(['uid', 'password'])
    try {
      await auth.use('web').attempt(uid, password)
    } catch (error) {
      session.flash('form', 'Your username, email, or password is incorrect')
      return response.redirect().back()
    }
    return response.status(200).json({status:1, auth: true});
  }

  public async session({ auth }: HttpContextContract) {
    // logout the user
    await auth.use('web').authenticate()
    console.log(auth.use('web').user!)
  }

  public async logout({ response, auth }: HttpContextContract) {
    // logout the user
    await auth.logout()

    // redirect to login page
    return response.redirect().toRoute('auth.login.show')
  }
}