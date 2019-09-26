import { Component, OnInit } from '@angular/core';
import {TipoInvestimento} from '../../shared_service/tipoinvestimento.service';
import {Tipoinvestimento} from '../../model/tipoinvestimento';
import {Router} from '@angular/router'
import {UserService} from '../../shared_service/user.service';


@Component({
  selector: 'app-investimento-user',
  templateUrl: './investimento-user.component.html',
  styleUrls: ['./investimento-user.component.css']
})
export class InvestimentoUserComponent implements OnInit {
  private investimento:Tipoinvestimento[];

  constructor(private _userService:UserService,private _investimentoService:TipoInvestimento, private _router:Router) { }

  ngOnInit() {
    if (this._userService.getter() == null) {
      this._router.navigate(['/']);
    }
  }

  realizarInvestimentos(){
    this._router.navigate(['/realizar-investimento']);
  }

  verInvestimentos(){
    this._router.navigate(['/ver-investimento']);
  }
}
