import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Tipoinvestimento } from '../../tipoinvestimento';
import { TipoInvestimento } from '../../shared_service/tipoinvestimento.service';
import { User } from '../../user';
import { UserService } from '../../shared_service/user.service';

@Component({
  selector: 'app-header-gerente',
  templateUrl: './header-gerente.component.html',
  styleUrls: ['./header-gerente.component.css']
})
export class HeaderGerenteComponent implements OnInit {

  constructor(private _userService: UserService,private _router:Router, private _tipoInvestimento:TipoInvestimento) { }

  ngOnInit() {
  }

  routerHome(){  
    this._router.navigate(['/principal-gerente']);
  }

  routerCadastro(){  
    let user = new User();
      this._userService.setter(user);
    this._router.navigate(['/cadastro']);
  }

  routerInvestimento(){  
    let tipoinvestimento = new Tipoinvestimento();
    this._tipoInvestimento.setter(tipoinvestimento);
    this._router.navigate(['/investimento-new']);
  }

  routerListagemCliente(){  
    this._router.navigate(['/lista-clientes']);
  }

  routerListagemInvestimento(){  
    this._router.navigate(['/lista-investiments']);
  }

}
