import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service';
import {TipoInvestimento} from '../../shared_service/tipoinvestimento.service';
import {User} from '../../user';
import {Tipoinvestimento} from '../../tipoinvestimento';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principal-gerente',
  templateUrl: './principal-gerente.component.html',
  styleUrls: ['./principal-gerente.component.css']
})
export class PrincipalGerenteComponent implements OnInit {
  private users:User[];
  constructor(private _userService:UserService, private _router:Router, private _tipoInvestimento:TipoInvestimento) { }

  ngOnInit() {
    this._tipoInvestimento.getUsers().subscribe((Tipoinvestimento)=>{
      console.log(Tipoinvestimento);
      this.users=Tipoinvestimento;
    },(error)=>{
      console.log(error);
    })
  }

  newUser(){
    let user = new User();
    this._userService.setter(user);
    this._router.navigate(['/cadastro']);
  }
 
  ListClients(){
    this._router.navigate(['/lista-clientes']);
  }

  CreateInvestiment(){
    let tipoinvestimento = new Tipoinvestimento();
    this._tipoInvestimento.setter(tipoinvestimento);
    this._router.navigate(['investimento-new']);
  }


}
