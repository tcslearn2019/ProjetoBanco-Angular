import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoanserviceService} from '../../shared_service/loanservice.service';
import {UserService} from '../../shared_service/user.service';
import {Loan} from '../../model/loan';

@Component({
  selector: 'app-emprestimo-user',
  templateUrl: './emprestimo-user.component.html',
  styleUrls: ['./emprestimo-user.component.css']
})
export class EmprestimoUserComponent implements OnInit {
  private loans:Loan[];
  constructor(private _loanService:LoanserviceService, private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    if(this._userService.getter() == null){
      this._router.navigate(['/']);   
    }
    
    else{
      this._loanService.getUserById(this._userService.getter().id).subscribe((listloan)=>{
        this.loans = listloan;
        this._loanService.setter(listloan);
      });
    }
  }

  newLoan(){
    this._router.navigate(['/realizar-emprestimo']);
  }

  SeeLoan(){
    this._router.navigate(['/ver-emprestimos']);
  }

}
