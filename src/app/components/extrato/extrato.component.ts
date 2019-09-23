import { Component, OnInit } from '@angular/core';
import {LoanserviceService} from '../../shared_service/loanservice.service';
import {Router} from '@angular/router'
import {UserService} from '../../shared_service/user.service';
import {Loan} from '../../loan';
import { Transferencia } from '../../transferencia';
import {TransferserviceService} from '../../shared_service/transferservice.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  private loans:Loan[];
  private loansPayed:Loan[];
  private transferencias:Transferencia[];

  constructor(private _loanService:LoanserviceService, private _router:Router,private _transfService:TransferserviceService, private _userService:UserService) { }


  ngOnInit() {
    this._loanService.getUserById(this._userService.getter().id).subscribe((listloan)=>{
      this.loans = listloan;
      this._loanService.setter(listloan);
    });

    this._loanService.getUserByIdPayed(this._userService.getter().id).subscribe((listloan)=>{
      this.loansPayed = listloan;
    });

    this._transfService.getTransfer(this._userService.getter().id).subscribe((listtransfer)=>{
      this.transferencias = listtransfer;
    });

  }

  voltarPrincipal(){
    this._router.navigate(['/principal']);
  }

  

}
