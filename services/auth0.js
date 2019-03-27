import auth0 from 'auth0-js'

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-hii26mrj.auth0.com',
      clientID: 'lReAO1Mr2XaMp0DUTgVYTqILl2A4Az6I',
      redirectUri: 'http://localhost:7000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    })
  }

  login() {
    this.auth0.authorize()
  }
}
