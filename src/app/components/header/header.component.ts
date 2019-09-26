import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AccountserviceService} from '../../shared_service/accountservice.service';
import {Account} from '../../model/account';
import { User } from 'src/app/model/user';
import {UserService} from '../../shared_service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  private acc:Account;
  private user:User;

  constructor(private _userService:UserService,private _router:Router, private _accounterService:AccountserviceService) { }

  ngOnInit() {
    this.acc = new Account();
    this.user=this._userService.getter();
    this._accounterService.returnBalance(this.user.id).subscribe((acc)=>{
      this.acc=acc;
    },(error)=>{
      console.log(error);
    })  
  }

  routerHome(){  
    this._router.navigate(['/principal']);
  }

  routerEmprestimo(){  
    this._router.navigate(['/emprestimo-user']);
  }

  routerInvestimento(){  
    this._router.navigate(['/investimento-user']);
  }

  routerTransf(){  
    this._router.navigate(['/transferencia']);
  }

  routerExtrato(){  
    this._router.navigate(['/extrato']);
  }



}
