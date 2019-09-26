import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared_service/user.service';
import { Transferencia } from '../../model/transferencia';
import { TransferserviceService } from '../../shared_service/transferservice.service';

@Component({
  selector: 'app-transferencias-form',
  templateUrl: './transferencias-form.component.html',
  styleUrls: ['./transferencias-form.component.css']
})
export class TransferenciasFormComponent implements OnInit {

  transferencia: Transferencia;

  constructor(private _userService: UserService, private _transfService: TransferserviceService, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this.transferencia = new Transferencia();
    }
  }

  Enviar() {
    this.transferencia.idOrigem = this._userService.getter().id.toString();
    this._transfService.sendInformation(this.transferencia).subscribe((transf) => {
      if(transf == true){
        alert("Transferência Realizada com sucesso.");
        this._router.navigate(['/principal']);
      }else {
        alert("Dados da Conta Destino estão incorretos ou seu saldo é insuficiente.");
      }
    })
  }

  voltarPrincipal() {
    this._router.navigate(['/principal']);
  }



}
