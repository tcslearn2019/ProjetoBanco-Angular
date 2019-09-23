import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  routerHome(){  
    this._router.navigate(['/principal']);
  }

  routerEmprestimo(){  
    this._router.navigate(['/emprestimo-user']);
  }

  routerInvestimento(){  
    this._router.navigate(['/investimento-user']);
  }

  routerTransf(){  
    this._router.navigate(['/transferencia']);
  }

  routerExtrato(){  
    this._router.navigate(['/extrato']);
  }




}
