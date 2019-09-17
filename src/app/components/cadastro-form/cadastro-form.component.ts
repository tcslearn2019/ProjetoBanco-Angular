import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  cadastro: any = {
    fname: null,
    lname: null,
    cpf: null,
    telefone: null,
    email: null,
    senha: null,
    confSenha: null
  }

  onSubmit(form){
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
