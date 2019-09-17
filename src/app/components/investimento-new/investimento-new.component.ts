import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investimento-new',
  templateUrl: './investimento-new.component.html',
  styleUrls: ['./investimento-new.component.css']
})
export class InvestimentoNewComponent implements OnInit {
  investimento: any = {
    nomeInvestimento: null,
    porcentagemJuros: null
  }
  onSubmit(form){
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
