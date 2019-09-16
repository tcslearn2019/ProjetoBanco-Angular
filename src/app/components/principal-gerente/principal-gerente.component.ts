import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service';
import {User} from '../../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principal-gerente',
  templateUrl: './principal-gerente.component.html',
  styleUrls: ['./principal-gerente.component.css']
})
export class PrincipalGerenteComponent implements OnInit {
  private users:User[];
  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    })
  }

  newUser(){
    let user = new User();
    this._userService.setter(user);
    this._router.navigate(['/cadastro']);
  }
 

}
