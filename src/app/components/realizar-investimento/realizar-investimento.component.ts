import { Component, OnInit } from '@angular/core';
import { Tipoinvestimento } from 'src/app/tipoinvestimento';
import { TipoInvestimento } from 'src/app/shared_service/tipoinvestimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizar-investimento',
  templateUrl: './realizar-investimento.component.html',
  styleUrls: ['./realizar-investimento.component.css']
})
export class RealizarInvestimentoComponent implements OnInit {
  private investimento:Tipoinvestimento[];

  constructor(private _investimentoService:TipoInvestimento, private _router:Router) { }

  ngOnInit() {
    this._investimentoService.getUsers().subscribe((investimento)=>{
      console.log(investimento);
      this.investimento=investimento;
    },(error)=>{
      console.log(error);
    })
  }

  createInvestiment() {
    
  }

}
