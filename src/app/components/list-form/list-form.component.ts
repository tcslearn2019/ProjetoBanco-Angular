import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
  private users: User[];

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this._userService.getUsers().subscribe((users) => {
        this.users = users;
      }, (error) => {
        console.log(error);
      })
    }
  }

  deleteUser(user) {
    this._userService.deleteUser(user.id).subscribe((data) => {
      this.users.splice(this.users.indexOf(user), 1);
    }, (error) => {
      console.log(error);
    })
  }

  updateUser(user) {
    this._userService.setter(user);
    this._router.navigate(['/cadastro']);
  }

  voltarPrincipal(){
    this._router.navigate(['/principal-gerente']);
  }


}
