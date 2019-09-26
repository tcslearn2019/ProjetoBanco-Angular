import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tipoinvestimento } from '../tipoinvestimento';

/*
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
*/
@Injectable({
  providedIn: 'root'
})
export class TipoInvestimento {
  private baseUrl:string='http://localhost:8080/banco/type';
  private headers = new Headers({'Content-Type':'application/json'})
  private options = new RequestOptions({headers:this.headers});
  private tipoinvestimento:Tipoinvestimento;
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl + '/investiment', this.options).pipe(map((response: Response) => response.json()));
  }

  getInvestimentsAtivo(){
    return this._http.get(this.baseUrl + '/investimentsativo', this.options).pipe(map((response: Response) => response.json()));
  }

  getInvestimentsInativo(){
    return this._http.get(this.baseUrl + '/investimentsinativo', this.options).pipe(map((response: Response) => response.json()));
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl + '/investiment/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/investiment/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  createUser(user:Tipoinvestimento){
    return this._http.post(this.baseUrl + '/investiment/', JSON.stringify(user), this.options).pipe(map((response: Response) => response.json()));
  }

  updateUser(type:Tipoinvestimento){
    return this._http.put(this.baseUrl + '/investiment/', JSON.stringify(type), this.options).pipe(map((response: Response) => response.json()));
  }

  errorHandler(error:Response){
    return Observable.throw(error || "Conection Error");
  }

  setter(tipoinvestimento:Tipoinvestimento){
    this.tipoinvestimento=tipoinvestimento;
  }

  getter(){
    return this.tipoinvestimento;
  }

}
