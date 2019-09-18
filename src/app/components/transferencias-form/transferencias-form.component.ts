import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../../loan';
import {UserService} from '../../shared_service/user.service';
import {LoanserviceService} from '../../shared_service/loanservice.service';

@Component({
  selector: 'app-transferencias-form',
  templateUrl: './transferencias-form.component.html',
  styleUrls: ['./transferencias-form.component.css']
})
export class TransferenciasFormComponent implements OnInit {

  constructor(private _loanService:LoanserviceService,private _router:Router) { }

  ngOnInit() {
  }

  enviarLogin(){
    console.log("Foi");

    


    this._router.navigate(['/principal']);
  }

}
