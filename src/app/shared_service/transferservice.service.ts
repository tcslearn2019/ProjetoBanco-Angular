import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transferencia } from '../transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferserviceService {
  private baseUrl:string='http://localhost:8080/banco';
  private headers = new Headers({'Content-Type':'application/json'})
  private options = new RequestOptions({headers:this.headers});
  private transf:Transferencia;
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl + '/emprestimos', this.options).pipe(map((response: Response) => response.json()));
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl + '/emprestimos/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/emprestimos/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  createUser(user:Account){
    return this._http.post(this.baseUrl + '/emprestimos/', JSON.stringify(user), this.options).pipe(map((response: Response) => response.json()));
  }

  updateUser(type:Account){
    return this._http.put(this.baseUrl + '/emprestimos/', JSON.stringify(type), this.options).pipe(map((response: Response) => response.json()));
  }

  sendInformation(transferencia : Transferencia){
    return this._http.post(this.baseUrl + '/transferencia/', JSON.stringify(transferencia), this.options).pipe(map((response: Response) => response.json()));
  }

  errorHandler(error:Response){
    return Observable.throw(error || "Conection Error");
  }

  setter(transf:Transferencia){
    this.transf=transf;
  }

  getter(){
    return this.transf;
  }


}
