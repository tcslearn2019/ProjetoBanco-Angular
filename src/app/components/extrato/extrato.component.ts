import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../../shared_service/loanservice.service';
import { Router } from '@angular/router'
import { UserService } from '../../shared_service/user.service';
import { Loan } from '../../loan';
import { Transferencia } from '../../transferencia';
import { TransferserviceService } from '../../shared_service/transferservice.service';
import { InvestimentosserviceService } from '../../shared_service/investimentosservice.service';
import { Investimento } from '../../investimento';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  private loans: Loan[];
  private loansPayed: Loan[];
  private transferencias: Transferencia[];
  private investimentos: Investimento[];
  private investimentosResgatados: Investimento[];

  constructor(private _loanService: LoanserviceService, private _investimentoService: InvestimentosserviceService, private _router: Router, private _transfService: TransferserviceService, private _userService: UserService) { }


  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this._loanService.getUserById(this._userService.getter().id).subscribe((listloan) => {
        this.loans = listloan;
        this._loanService.setter(listloan);
      });

      this._loanService.getUserByIdPayed(this._userService.getter().id).subscribe((listloan) => {
        this.loansPayed = listloan;
      });

      this._transfService.getTransfer(this._userService.getter().id).subscribe((listtransfer) => {
        this.transferencias = listtransfer;
      });

      this._investimentoService.getInvestimentoById(this._userService.getter().id).subscribe((investimentos) => {
        this.investimentos = investimentos;
      });

      this._investimentoService.getInvestimentoByIdResgatados(this._userService.getter().id).subscribe((investimentosResgatados) => {
        this.investimentosResgatados = investimentosResgatados;
      });
    }
  }

  voltarPrincipal() {
    this._router.navigate(['/principal']);
  }



}
