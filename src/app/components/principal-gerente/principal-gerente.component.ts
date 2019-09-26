import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { TipoInvestimento } from '../../shared_service/tipoinvestimento.service';
import { User } from '../../model/user';
import { Tipoinvestimento } from '../../model/tipoinvestimento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-gerente',
  templateUrl: './principal-gerente.component.html',
  styleUrls: ['./principal-gerente.component.css']
})
export class PrincipalGerenteComponent implements OnInit {
  private users: User[];
  constructor(private _userService: UserService, private _router: Router, private _tipoInvestimento: TipoInvestimento) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }
  }

  newUser() {
      let user = new User();
      this._userService.setter(user);
      this._router.navigate(['/cadastro']);
  }

  ListClients() {
    this._router.navigate(['/lista-clientes']);
  }

  CreateInvestiment() {
    let tipoinvestimento = new Tipoinvestimento();
    this._tipoInvestimento.setter(tipoinvestimento);
    this._router.navigate(['investimento-new']);
  }

  ListInvestiment() {
    this._router.navigate(['/lista-investiments']);
  }



}
