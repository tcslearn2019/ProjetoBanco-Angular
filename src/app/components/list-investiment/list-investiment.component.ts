import { Component, OnInit } from '@angular/core';
import { TipoInvestimento } from '../../shared_service/tipoinvestimento.service';
import { Tipoinvestimento } from '../../model/tipoinvestimento';
import { Router } from '@angular/router'
import { UserService } from '../../shared_service/user.service';

@Component({
  selector: 'app-list-investiment',
  templateUrl: './list-investiment.component.html',
  styleUrls: ['./list-investiment.component.css']
})
export class ListInvestimentComponent implements OnInit {
  private investimentoAtivo: Tipoinvestimento[];
  private investimentoInativo: Tipoinvestimento[];

  constructor(private _userService: UserService,private _investimentoService: TipoInvestimento, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this._investimentoService.getInvestimentsAtivo().subscribe((investimento) => {
        this.investimentoAtivo = investimento;
      }, (error) => {
        console.log(error);
      })

      this._investimentoService.getInvestimentsInativo().subscribe((investimento) => {
        this.investimentoInativo = investimento;
      }, (error) => {
        console.log(error);
      })
    }
  }

  deleteUser(Investiment) {
    this._investimentoService.deleteUser(Investiment.idinv).subscribe((data) => {
    }, (error) => {
      console.log(error);
    })
    this._router.navigate(['/principal-gerente']);
  }

  updateUser(Investiment) {
    this._investimentoService.setter(Investiment);
    this._router.navigate(['/investimento-new']);
  }

  voltarPrincipal(){
    this._router.navigate(['/principal-gerente']);
  }

}
