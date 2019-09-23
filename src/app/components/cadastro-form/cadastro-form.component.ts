import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service';
import { User } from 'src/app/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  private user:User;

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {  
    this.user=this._userService.getter();
  }

  onSubmit(form){
    console.log(form);
  }

  processForm(){
    if(this.user.id==undefined){
      this._userService.createUser(this.user).subscribe((user)=>{
        alerta();
        this._router.navigate(['/principal-gerente']);
      },(error)=>{
        console.log(error);
      });
    }else{
      this._userService.updateUser(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/principal-gerente']);
      },(error)=>{
        console.log(error);
      });
    }

    function alerta(){
      alert("Cadastro Realizado com sucesso");
    }
  }
}
