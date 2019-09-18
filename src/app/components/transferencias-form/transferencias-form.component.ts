import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../../transferencia';
import {LoanserviceService} from '../../shared_service/loanservice.service';

@Component({
  selector: 'app-transferencias-form',
  templateUrl: './transferencias-form.component.html',
  styleUrls: ['./transferencias-form.component.css']
})
export class TransferenciasFormComponent implements OnInit {

  transferencia:Transferencia;

  constructor(private _loanService:LoanserviceService, private _router:Router) { }

  ngOnInit() {
    this.transferencia = new Transferencia();
  }

  usuario: any = {
    agencia: null,
    conta: null,
    valor: null
  }

  Enviar(form){
    this._loanService.sendInformation(this.transferencia).subscribe((transf)=>{  
      console.log(this.transferencia);
      console.log(transf);
      this._router.navigate(['/transferencia']);
    })
  }

  

}
