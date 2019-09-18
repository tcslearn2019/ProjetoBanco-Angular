import { Component, OnInit } from '@angular/core';
import {TipoInvestimento} from '../../shared_service/tipoinvestimento.service';
import {Tipoinvestimento} from '../../tipoinvestimento';
import {Router} from '@angular/router';

@Component({
  selector: 'app-investimento-new',
  templateUrl: './investimento-new.component.html',
  styleUrls: ['./investimento-new.component.css']
})
export class InvestimentoNewComponent implements OnInit {
  investimento: any = {
    nomeInvestimento: null,
    porcentagemJuros: null
  }
  onSubmit(form){
    console.log(form);
  }
  private tipoInvest:Tipoinvestimento;

  constructor(private _investmentService:TipoInvestimento, private _router:Router) { }

  ngOnInit() {
    this.tipoInvest=this._investmentService.getter();
  }

  processForm(){
    if(this.tipoInvest.idinv==undefined){
      this._investmentService.createUser(this.tipoInvest).subscribe((tipoInvest)=>{
        console.log(tipoInvest);
        this._router.navigate(['/principal-gerente']);
      },(error)=>{
        console.log(error);
      });
    }else{
      this._investmentService.updateUser(this.tipoInvest).subscribe((tipoInvest)=>{
        console.log(tipoInvest);
        this._router.navigate(['/principal-gerente']);
      },(error)=>{
        console.log(error);
      });
    }
  }

}
