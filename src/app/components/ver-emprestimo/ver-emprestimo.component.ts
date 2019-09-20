import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoanserviceService} from '../../shared_service/loanservice.service';
import {UserService} from '../../shared_service/user.service';
import {Loan} from '../../loan';
import { User } from 'src/app/user';

@Component({
  selector: 'app-ver-emprestimo',
  templateUrl: './ver-emprestimo.component.html',
  styleUrls: ['./ver-emprestimo.component.css']
})
export class VerEmprestimoComponent implements OnInit {
  private loans:Loan[];

  constructor(private _loanService:LoanserviceService, private _router:Router, private _userService:UserService) { }

  ngOnInit() {
    this._loanService.getUsers().subscribe((listloan)=>{
      console.log(listloan)
      this.loans = listloan;
    });

    this._loanService.getUserById(this._userService.getter().id).subscribe((listloan)=>{
      this.loans = listloan;
    });

  }

}
