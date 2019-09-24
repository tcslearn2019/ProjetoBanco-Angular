import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Tipoinvestimento } from 'src/app/tipoinvestimento';
import { TipoInvestimento } from 'src/app/shared_service/tipoinvestimento.service';
import { Router } from '@angular/router';
=======
import { TipoInvestimento } from '../../shared_service/tipoinvestimento.service';
import { Tipoinvestimento } from '../../tipoinvestimento';
import { InvestimentosserviceService } from '../../shared_service/investimentosservice.service';
import { Router } from '@angular/router'
import { UserService } from '../../shared_service/user.service';
>>>>>>> origin/Atualizada

@Component({
  selector: 'app-realizar-investimento',
  templateUrl: './realizar-investimento.component.html',
  styleUrls: ['./realizar-investimento.component.css']
})
export class RealizarInvestimentoComponent implements OnInit {
<<<<<<< HEAD
  private investimento:Tipoinvestimento[];

  constructor(private _investimentoService:TipoInvestimento, private _router:Router) { }

  ngOnInit() {
    this._investimentoService.getUsers().subscribe((investimento)=>{
      console.log(investimento);
      this.investimento=investimento;
    },(error)=>{
=======
  private tipoInvestimento: Tipoinvestimento[];

  constructor(private _userService: UserService, private _investimentoService: InvestimentosserviceService, private _tipoInvestimentoService: TipoInvestimento, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this._tipoInvestimentoService.getUsers().subscribe((tipoInvestimento) => {
        this.tipoInvestimento = tipoInvestimento;
      }, (error) => {
        console.log(error);
      })
    }
  }

  updateUser(Investimento) {
    Investimento['iduser'] = this._userService.getter().id
    this._investimentoService.createInvestimento(Investimento).subscribe((retorno) => {
      console.log(retorno)
    }, (error) => {
>>>>>>> origin/Atualizada
      console.log(error);
    })
  }

<<<<<<< HEAD
  createInvestiment() {
    
=======
  voltarPrincipal() {
    this._router.navigate(['/principal']);
>>>>>>> origin/Atualizada
  }

}
