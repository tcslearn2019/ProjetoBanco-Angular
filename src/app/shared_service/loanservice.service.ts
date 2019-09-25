import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Loan } from '../loan';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {
  private baseUrl:string='http://localhost:8080/banco';
  private headers = new Headers({'Content-Type':'application/json'})
  private options = new RequestOptions({headers:this.headers});
  private loan:Loan[];
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl + '/loan', this.options).pipe(map((response: Response) => response.json()));
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl + '/loan/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/loan/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  createUser(loan:Loan){
    return this._http.post(this.baseUrl + '/loan/', JSON.stringify(loan), this.options).pipe(map((response: Response) => response.json()));
  }

  updateUser(type:Loan){
    return this._http.put(this.baseUrl + '/loan/', JSON.stringify(type), this.options).pipe(map((response: Response) => response.json()));
  }

  getUserById(id:Number){
    return this._http.post(this.baseUrl + '/loanpersonal/', JSON.stringify(id), this.options).pipe(map((response: Response) => response.json()));
  }

  getUserByIdPayed(id:Number){
    return this._http.post(this.baseUrl + '/loanpersonalpayed/', JSON.stringify(id), this.options).pipe(map((response: Response) => response.json()));
  }

  payLoan(id:Number){
    return this._http.post(this.baseUrl + '/loanpay/', JSON.stringify(id), this.options).pipe(map((response: Response) => response.json()));
  }

  errorHandler(error:Response){
    return Observable.throw(error || "Conection Error");
  }

  setter(loan:Loan[]){
    this.loan=loan;
  }

  getter(){
    return this.loan;
  }
}
