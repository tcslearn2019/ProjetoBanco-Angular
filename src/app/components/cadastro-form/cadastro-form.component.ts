import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service';
import { User } from 'src/app/model/user';
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
    if(this._userService.getter() == null){
      this._router.navigate(['/']);   
    }
    
    else{
      this.user=this._userService.getter();
    }
  }

  processForm(){
    if(this.user.id==undefined){
      this._userService.createUser(this.user).subscribe((user)=>{
        alerta();
        this._router.navigate(['/principal-gerente']);
      },(error)=>{
        alertaError();
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

    function alertaError(){
      alert("Não foi possivel realizar o cadastro, dados duplicados.");
    }
  }

  voltarPrincipal(){
    this._router.navigate(['/principal-gerente']);
  }

}
