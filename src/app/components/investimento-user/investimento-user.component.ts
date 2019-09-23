import { Component, OnInit } from '@angular/core';
import {TipoInvestimento} from '../../shared_service/tipoinvestimento.service';
import {Tipoinvestimento} from '../../tipoinvestimento';
import {Router} from '@angular/router'


@Component({
  selector: 'app-investimento-user',
  templateUrl: './investimento-user.component.html',
  styleUrls: ['./investimento-user.component.css']
})
export class InvestimentoUserComponent implements OnInit {
  private investimento:Tipoinvestimento[];

  constructor(private _investimentoService:TipoInvestimento, private _router:Router) { }

  ngOnInit() {
    
  }

  realizarInvestimentos(){
    this._router.navigate(['/realizar-investimento']);
  }

  verInvestimentos(){
    this._router.navigate(['/ver-investimento']);
  }
}
