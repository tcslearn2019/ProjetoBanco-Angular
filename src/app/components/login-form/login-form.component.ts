import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../login';
import {UserService} from '../../shared_service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private _userService:UserService, private _router:Router) { }

  login:Login
  
  ngOnInit() {
    this.login = new Login()
  }
  
  enviarLogin(){
    this._userService.sendInformation(this.login).subscribe((login)=>{
      this._userService.setter(login);
      this._router.navigate(['/principal']);
    })
  }
  


}
