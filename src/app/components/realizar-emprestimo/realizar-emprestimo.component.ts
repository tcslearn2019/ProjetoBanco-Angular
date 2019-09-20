import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service';
import {LoanserviceService} from '../../shared_service/loanservice.service';
import { Loan } from 'src/app/loan';
@Component({
  selector: 'app-realizar-emprestimo',
  templateUrl: './realizar-emprestimo.component.html',
  styleUrls: ['./realizar-emprestimo.component.css']
})
export class RealizarEmprestimoComponent implements OnInit {
  private loan:Loan;

  constructor(private _userService:UserService, private _loanService:LoanserviceService) { }

  ngOnInit() {   
    this.loan = new Loan();
    console.log(this._userService);
  }

  MandarForm(){
    this.loan.idOrigem = this._userService.getter().id;
    console.log("Indo!");
    this._loanService.createUser(this.loan).subscribe((user)=>{
      console.log(this.loan);
    })
  }

}
