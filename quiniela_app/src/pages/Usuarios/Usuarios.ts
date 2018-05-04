import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service'

@Component({
  selector: 'page-Usuarios',
  templateUrl: 'Usuarios.html'
})
export class UsuariosPage{
  nombre: any;
  apellido: any;
  email:any;
  password:any;
  username:any;
  
  constructor(public navCtrl: NavController,
    public userService: UserService) {

  }

  clickSave(){
     var Usuarios: any = {};
     Usuarios.nombre = this.nombre;
     Usuarios.apellido = this.apellido;
     Usuarios.email = this.email;
     Usuarios.password = this.password;
     Usuarios.userName = this.username;
     Usuarios.token = "1";
    this.userService.saveUser(Usuarios);
  }
}