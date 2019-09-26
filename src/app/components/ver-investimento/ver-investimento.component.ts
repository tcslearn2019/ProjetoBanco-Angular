import { Component, OnInit } from '@angular/core';
import { InvestimentosserviceService } from '../../shared_service/investimentosservice.service';
import { Investimento } from '../../model/investimento';
import { Router } from '@angular/router';
import { UserService } from '../../shared_service/user.service';

@Component({
  selector: 'app-ver-investimento',
  templateUrl: './ver-investimento.component.html',
  styleUrls: ['./ver-investimento.component.css']
})
export class VerInvestimentoComponent implements OnInit {
  private investimentos: Investimento[];


  constructor(private _userService: UserService, private _investimentoService: InvestimentosserviceService, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this._investimentoService.getInvestimentoById(this._userService.getter().id).subscribe((investimentos) => {
        this.investimentos = investimentos;
      }, (error) => {
        console.log(error);
      })
    }
  }


  Resgatar(investimento) {
    console.log(investimento)
    this._investimentoService.resgateInvestimentoById(investimento).subscribe((investimentos) => {
      this._router.navigate(['/principal']);
    }, (error) => {
      console.log(error);
    })

  }

  redirect() {
    this._router.navigate(['/principal']);
  }

}
