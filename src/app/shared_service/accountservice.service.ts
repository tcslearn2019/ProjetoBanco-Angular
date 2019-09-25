import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  private baseUrl:string='http://localhost:8080/banco';
  private headers = new Headers({'Content-Type':'application/json'})
  private options = new RequestOptions({headers:this.headers});
  private acc:Account;
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl + '/account', this.options).pipe(map((response: Response) => response.json()));
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl + '/account/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/account/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  createUser(user:Account){
    return this._http.post(this.baseUrl + '/account/', JSON.stringify(user), this.options).pipe(map((response: Response) => response.json()));
  }

  updateUser(type:Account){
    return this._http.put(this.baseUrl + '/account/', JSON.stringify(type), this.options).pipe(map((response: Response) => response.json()));
  }

  returnBalance(idUsuario:Number){
    return this._http.post(this.baseUrl + '/accountbalance/', JSON.stringify(idUsuario), this.options).pipe(map((response: Response) => response.json()));
  }

  errorHandler(error:Response){
    return Observable.throw(error || "Conection Error");
  }

  setter(acc:Account){
    this.acc=acc;
  }

  getter(){
    return this.acc;
  }
}
