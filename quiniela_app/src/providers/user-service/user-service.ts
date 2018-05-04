import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
  saveUser(Usuarios) {
    //Cala
    console.log("asdfasdfsa");
    return this.http.post('http://localhost:3005/usuarios/crear', Usuarios).toPromise().then((resultado) => {
      console.log(resultado);
    }).catch(error => {
      console.log(error);
    });
  }
}
