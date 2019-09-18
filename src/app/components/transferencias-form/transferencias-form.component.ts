import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencias-form',
  templateUrl: './transferencias-form.component.html',
  styleUrls: ['./transferencias-form.component.css']
})
export class TransferenciasFormComponent implements OnInit {

  usuario: any = {
    agencia: null,
    conta: null,
    valor: null
  }

  onSubmit(form){
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
