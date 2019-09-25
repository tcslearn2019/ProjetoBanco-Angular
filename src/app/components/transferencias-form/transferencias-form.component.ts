import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../shared_service/user.service';
import { Transferencia } from '../../transferencia';
import {TransferserviceService} from '../../shared_service/transferservice.service';

@Component({
  selector: 'app-transferencias-form',
  templateUrl: './transferencias-form.component.html',
  styleUrls: ['./transferencias-form.component.css']
})
export class TransferenciasFormComponent implements OnInit {

  transferencia:Transferencia;

  constructor(private _userService:UserService,private _transfService:TransferserviceService, private _router:Router) { }

  ngOnInit() {
    this.transferencia = new Transferencia();
    console.log(this._userService);
  }

  onSubmit(form){
    console.log(form);
  }

  Enviar(){
    this.transferencia.idOrigem = this._userService.getter().id.toString();
    console.log(this.transferencia);
    this._transfService.sendInformation(this.transferencia).subscribe((transf)=>{  
      console.log(this.transferencia);
      console.log(transf);
      this._router.navigate(['/principal']);
    })
  }
}
