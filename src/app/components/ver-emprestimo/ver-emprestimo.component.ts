import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoanserviceService } from '../../shared_service/loanservice.service';
import { UserService } from '../../shared_service/user.service';
import { Loan } from '../../loan';

@Component({
  selector: 'app-ver-emprestimo',
  templateUrl: './ver-emprestimo.component.html',
  styleUrls: ['./ver-emprestimo.component.css']
})
export class VerEmprestimoComponent implements OnInit {
  private loans: Loan[];

  constructor(private _loanService: LoanserviceService, private _router: Router, private _userService: UserService) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this.loans = this._loanService.getter();
    }
  }

  payLoan(loan) {
    this._loanService.payLoan(loan.idEmprestimo).subscribe((user) => {
      if(user == false){
        alert("Saldo Insuficiente.");
      }else{
        alert("Emprestimo Pago com sucesso.")
      }
      this._router.navigate(['/principal']);
    })
  }

  redirect() {
    this._router.navigate(['/principal']);
  }
}
