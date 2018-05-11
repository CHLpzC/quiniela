import { Injectable } from '@angular/core';
import { HttpService } from '../http/http-service'

@Injectable()
export class UserService extends HttpService {

  getUsers() {
    return this.get('https://randomuser.me/api/?results=25');
  }

  saveUser(Usuarios) {
    return this.post('/usuarios/crear', Usuarios).toPromise().then((resultado) => {
      console.log(resultado);
    }).catch(error => {
      console.log(error);
    });
  }
}
