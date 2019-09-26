import { Component, OnInit } from '@angular/core';
import { TipoInvestimento } from '../../shared_service/tipoinvestimento.service';
import { Tipoinvestimento } from '../../tipoinvestimento';
import { Router } from '@angular/router';
import { UserService } from '../../shared_service/user.service';

@Component({
  selector: 'app-investimento-new',
  templateUrl: './investimento-new.component.html',
  styleUrls: ['./investimento-new.component.css']
})
export class InvestimentoNewComponent implements OnInit {
  private tipoInvest: Tipoinvestimento;

  constructor(private _userService: UserService, private _investmentService: TipoInvestimento, private _router: Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }

    else {
      this.tipoInvest = this._investmentService.getter();
    }
  }

  processForm() {
    if (this.tipoInvest.idinv == undefined) {
      this._investmentService.createUser(this.tipoInvest).subscribe((tipoInvest) => {
        this._router.navigate(['/principal-gerente']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this._investmentService.updateUser(this.tipoInvest).subscribe((tipoInvest) => {
        this._router.navigate(['/principal-gerente']);
      }, (error) => {
        console.log(error);
      });
    }
  }

  voltarPrincipal() {
    this._router.navigate(['/principal-gerente']);
  }

}
