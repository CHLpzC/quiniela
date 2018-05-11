import { Component } from '@angular/core';
import {  IonicPage, NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { UsuariosPage } from '../Usuarios/Usuarios';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  
 // users: any[] = [];

  constructor(public navCtrl: NavController,
    public userService: UserService) {

  }

  ClickButton(){
    this.navCtrl.push(UsuariosPage);
  }

  // ionViewDidLoad(){
  //   this.userService.getUsers()
  //   .subscribe(
  //     (data) => { // Success
  //       //this.users = data['results'];
  //       this.users = "carlos";
  //       console.log(this.users);
  //     },
  //     (error) =>{
  //       console.log(error);
  //     }
  //   )
  // }

}
