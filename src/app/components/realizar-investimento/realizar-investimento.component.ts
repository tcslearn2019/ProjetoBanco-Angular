import { Component, OnInit } from '@angular/core';
import {TipoInvestimento} from '../../shared_service/tipoinvestimento.service';
import {Tipoinvestimento} from '../../tipoinvestimento';
import {InvestimentosserviceService} from '../../shared_service/investimentosservice.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-realizar-investimento',
  templateUrl: './realizar-investimento.component.html',
  styleUrls: ['./realizar-investimento.component.css']
})
export class RealizarInvestimentoComponent implements OnInit {
  private tipoInvestimento:Tipoinvestimento[];

  constructor(private _investimentoService:InvestimentosserviceService,private _tipoInvestimentoService:TipoInvestimento, private _router:Router) { }

  ngOnInit() {
    this._tipoInvestimentoService.getUsers().subscribe((tipoInvestimento)=>{
    this.tipoInvestimento=tipoInvestimento;
  },(error)=>{
    console.log(error);
  })
  }

  updateUser(tipoInvestimento){
    this._investimentoService.createInvestimento(tipoInvestimento).subscribe((retorno) => {
      console.log(tipoInvestimento)
      console.log(retorno);
    },(error)=>{
      console.log(error);
    })
  }

}
