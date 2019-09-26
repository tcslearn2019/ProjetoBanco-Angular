import { Component, OnInit } from '@angular/core';
import { TipoInvestimento } from '../../shared_service/tipoinvestimento.service';
import { Tipoinvestimento } from '../../model/tipoinvestimento';
import { InvestimentosserviceService } from '../../shared_service/investimentosservice.service';
import { Router } from '@angular/router'
import { UserService } from '../../shared_service/user.service';

@Component({
  selector: 'app-realizar-investimento',
  templateUrl: './realizar-investimento.component.html',
  styleUrls: ['./realizar-investimento.component.css']
})
export class RealizarInvestimentoComponent implements OnInit {
  private tipoInvestimento: Tipoinvestimento[];

  constructor(private _userService: UserService, private _investimentoService: InvestimentosserviceService, private _tipoInvestimentoService: TipoInvestimento, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this._tipoInvestimentoService.getInvestimentsAtivo().subscribe((tipoInvestimento) => {
        this.tipoInvestimento = tipoInvestimento;
      }, (error) => {
        console.log(error);
      })
    }
  }

  updateUser(Investimento) {
    Investimento['iduser'] = this._userService.getter().id
    this._investimentoService.createInvestimento(Investimento).subscribe((retorno) => {
      if(retorno == false){
        alert("Saldo Insuficiente para Investir.");
        this._router.navigate(['/realizar-investimento']);
      }else {
        alert("Investimento Realizado com sucesso");
        this._router.navigate(['/realizar-investimento']);
        console.log(retorno)
      }
    }, (error) => {
      console.log(error);
    })
  }

  voltarPrincipal() {
    this._router.navigate(['/principal']);
  }
}
