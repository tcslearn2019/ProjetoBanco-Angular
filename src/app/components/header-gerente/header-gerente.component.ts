import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-gerente',
  templateUrl: './header-gerente.component.html',
  styleUrls: ['./header-gerente.component.css']
})
export class HeaderGerenteComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  routerHome(){  
    this._router.navigate(['/principal-gerente']);
  }

  routerCadastro(){  
    this._router.navigate(['/cadastro']);
  }

  routerInvestimento(){  
    this._router.navigate(['/investimento-new']);
  }

  routerListagemCliente(){  
    this._router.navigate(['/lista-clientes']);
  }

  routerListagemInvestimento(){  
    this._router.navigate(['/lista-investiments']);
  }

}
