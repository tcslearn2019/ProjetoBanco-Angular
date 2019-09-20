import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import {UserService} from '../../shared_service/user.service';
import {Router} from '@angular/router';
import {AccountserviceService} from '../../shared_service/accountservice.service';
import {Account} from '../../account';
@Component({
  selector: 'app-principal-form',
  templateUrl: './principal-form.component.html',
  styleUrls: ['./principal-form.component.css']
})
export class PrincipalFormComponent implements OnInit {
  private user:User;
  private acc:Account;

  constructor(private _userService:UserService, private _router:Router, private _accounterService:AccountserviceService ) { }

  ngOnInit() {
    this.acc = new Account();
    if(this._userService.getter() == null){
      this._router.navigate(['/principal']);
    }
    
    else{
    this.user=this._userService.getter();
    this._accounterService.returnBalance(this.user.id).subscribe((acc)=>{
      this.acc=acc;
    },(error)=>{
      console.log(error);
    })   
    }
  }


  newTransfer(){

    this._router.navigate(['/transferencia']);
  }




}
