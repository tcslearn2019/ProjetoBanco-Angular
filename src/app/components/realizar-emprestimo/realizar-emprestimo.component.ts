import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { LoanserviceService } from '../../shared_service/loanservice.service';
import { Loan } from 'src/app/model/loan';
import { Router } from '@angular/router';
@Component({
  selector: 'app-realizar-emprestimo',
  templateUrl: './realizar-emprestimo.component.html',
  styleUrls: ['./realizar-emprestimo.component.css']
})
export class RealizarEmprestimoComponent implements OnInit {
  private loan: Loan;

  constructor(private _userService: UserService, private _loanService: LoanserviceService, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this.loan = new Loan();
    }
  }

  mandarForm() {
    this.loan.idOrigem = this._userService.getter().id;
    if (Number(this.loan.valor) > 5000) {
      alert("Valor máximo: R$5000");
    } else {
      this._loanService.createUser(this.loan).subscribe((user) => {
        this._router.navigate(['/principal']);
      }, (error) => {
        alert("Você já atingiu o limite de 5 empréstimos ativo.");
      })
    }
  }

  redirect() {
    this._router.navigate(['/principal']);
  }

}
