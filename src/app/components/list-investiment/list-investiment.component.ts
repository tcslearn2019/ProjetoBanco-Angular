import { Component, OnInit } from '@angular/core';
import {TipoInvestimento} from '../../shared_service/tipoinvestimento.service';
import {Tipoinvestimento} from '../../tipoinvestimento';
import {Router} from '@angular/router'

@Component({
  selector: 'app-list-investiment',
  templateUrl: './list-investiment.component.html',
  styleUrls: ['./list-investiment.component.css']
})
export class ListInvestimentComponent implements OnInit {
  private investimento:Tipoinvestimento[];

  constructor(private _investimentoService:TipoInvestimento, private _router:Router) { }

  ngOnInit() {
    this._investimentoService.getUsers().subscribe((investimento)=>{
      this.investimento=investimento;
    },(error)=>{
      console.log(error);
    })
  }

  deleteUser(Investiment){
    this._investimentoService.deleteUser(Investiment.idinv).subscribe((data)=>{
      this.investimento.splice(this.investimento.indexOf(Investiment),1);
    },(error)=>{
      console.log(error);
    })
  }

  updateUser(Investiment){
    this._investimentoService.setter(Investiment);
    this._router.navigate(['/investimento-new']);
  }

}
