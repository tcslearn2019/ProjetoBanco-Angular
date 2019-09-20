import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-emprestimo-user',
  templateUrl: './emprestimo-user.component.html',
  styleUrls: ['./emprestimo-user.component.css']
})
export class EmprestimoUserComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  newLoan(){
    this._router.navigate(['/realizar-emprestimo']);
  }

  SeeLoan(){
    this._router.navigate(['/ver-emprestimos']);
  }

}
